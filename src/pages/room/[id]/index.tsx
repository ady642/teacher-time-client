import {FC, useEffect, useRef} from "react";
import {socket} from "@/common/utils/client";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import {withRouter} from 'next/router'
import {OfferIcePayload, RTCIceCandidateInit, RTCSessionDescriptionInit} from "@/modules/Room/types";


interface RoomProps {
	router: any
}

const Room: FC<RoomProps> = ({ router }) => {

	const { token } = useAuthGetters()

	useEffect(() => {
		if (token) return; // do nothing if the user is logged in
		router.replace("/room", "/", { shallow: true });
	}, [token]);

	const partnerVideo = useRef<HTMLVideoElement>()
	const peerRef = useRef<RTCPeerConnection>()
	const otherUser = useRef<string>()
	const userStream = useRef<MediaStream>()

	const setStudent = async (otherUserID: string) => {
		otherUser.current = otherUserID
		await sendOffer(otherUserID)
	}

	const setTeacher = async (otherUserID: string) => {
		otherUser.current = otherUserID
	}

	const sendOffer = async (to: string) => {
		const offer: RTCSessionDescriptionInit = await peerRef.current.createOffer();
		await peerRef.current.setLocalDescription(new RTCSessionDescription(offer));

		socket.emit('offer', { offer, to });
	}

	const answerToOffer = async (offer: RTCSessionDescriptionInit) => {
		await peerRef.current.setRemoteDescription(offer)
		const answer: RTCSessionDescriptionInit = await peerRef.current.createAnswer();
		await peerRef.current.setLocalDescription(new RTCSessionDescription(answer));

		socket.emit('answer', {answer, to: otherUser.current});
	}

	const setAnswerAsLocalDescription = async (answer: RTCSessionDescriptionInit) => {
		await peerRef.current.setRemoteDescription(new RTCSessionDescription(answer))
	}

	const handleICECandidateEvent = (e: RTCPeerConnectionIceEvent) => {
		if (e.candidate) {
			const payload: OfferIcePayload = {
				target: otherUser.current,
				candidate: e.candidate,
			}
			socket.emit("offer-ice-candidate", payload);
		}
	}
	const setICECandidateMsg = async (candidateInit: RTCIceCandidateInit ) => {
		const candidate = new RTCIceCandidate(candidateInit);

		await peerRef.current.addIceCandidate(candidate)
	}
	const handleTrackEvent = (e: RTCTrackEvent) => {
		console.log('je track levent')
		partnerVideo.current.srcObject = e.streams[0];
	}
	const createPeer = (): RTCPeerConnection => {
		const peer = new RTCPeerConnection()

		peer.createDataChannel('test')
		peer.onicecandidate = handleICECandidateEvent
		peer.ontrack = handleTrackEvent

		return peer
	}

	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {
			userStream.current = stream

			if(router.query.id) {
				peerRef.current = createPeer()
				userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current));
				socket.emit('join-room', router.query.id)
				socket.on('retrieve-teacher', setTeacher)
				socket.on('student-joined', setStudent)
				socket.on('on-offer', answerToOffer)
				socket.on('on-answer', setAnswerAsLocalDescription)
				socket.on('on-ice-candidate-offer', setICECandidateMsg)
			}

		})

	}, [router.query.id])



	return <div>
		<video autoPlay ref={partnerVideo} />
		{/*<BoardContainer />*/}
	</div>
}

export default withRouter(Room)
