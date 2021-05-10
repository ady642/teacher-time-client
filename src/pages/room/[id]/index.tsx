import {FC, useCallback, useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import BoardContainer from "@/modules/Room/Whiteboard/BoardContainer";
import { socket } from "@/common/utils/client";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import PaymentClient from '@/modules/Payment/services/PaymentClient'
import TeacherClient from '@/modules/Teachers/services/TeacherClient'
import Teacher from "@/modules/Teachers/models/Teacher";

interface RTCPayload {
	target: string,
	caller: string,
	sdp: RTCSessionDescription
}

const Room: FC = () => {
	const router = useRouter()

	const { id } = router.query

	const { token } = useAuthGetters()
	const paymentClient = new PaymentClient(token)
	const teacherClient = new TeacherClient(token)
	const [teacher, setTeacher] = useState(new Teacher())

	useEffect(() => {
		if (token) return; // do nothing if the user is logged in
		router.replace("/room", "/", { shallow: true });
	}, [token]);

	const partnerVideo = useRef<HTMLVideoElement>()
	const peerRef = useRef<RTCPeerConnection>()
	const otherUser = useRef<string>()
	const userStream = useRef<MediaStream>()

	/*const fetchTeacher = useCallback(async () => {
		const teacher = await teacherClient.get(id)
		setTeacher(new Teacher(teacher))
	}, []) */

	useEffect(() => {
		//fetchTeacher()

		navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
			userStream.current = stream

			socket.emit('join-room', id)
			socket.on('other-user', (userID: string) => {
				callUser(userID)
				otherUser.current = userID
			})
			socket.on('user-joined', (userID: string) => { otherUser.current = userID })
			socket.on('offer', handleReceiveCall)
			socket.on('answer', handleAnswer)
			socket.on('ice-candidate', handleNewICECandidateMsg)
		})
	}, [])

	const callUser = (userID: string) => {
		peerRef.current = createPeer(userID)
		userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current))
	}

	const createPeer = (userID: string): RTCPeerConnection => {
		const peer = new RTCPeerConnection({
			iceServers: [],
		})

		peer.onicecandidate = handleICECandidateEvent
		peer.ontrack = handleTrackEvent
		peer.onnegotiationneeded = () => handleNegotiationNeededEvent(userID)

		return peer
	}

	const handleNegotiationNeededEvent = async (userID: string) => {
		const offer = await peerRef.current.createOffer()
		await peerRef.current.setLocalDescription(offer)
		const payload: RTCPayload = {
			target: userID,
			caller: socket.id,
			sdp: peerRef.current.localDescription
		}

		socket.emit('offer', payload)
	}

	const handleReceiveCall = async (incoming: RTCPayload) => {
		peerRef.current = createPeer('');

		const desc = new RTCSessionDescription(incoming.sdp);
		await peerRef.current.setRemoteDescription(desc)
		userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current));

		const answer = await peerRef.current.createAnswer();
		await peerRef.current.setLocalDescription(answer);
		const payload: RTCPayload = {
			target: incoming.caller,
			caller: socket.id,
			sdp: peerRef.current.localDescription
		}

		socket.emit("answer", payload);
	}

	const handleAnswer = async (message: RTCPayload) => {
		const desc = new RTCSessionDescription(message.sdp);
		await peerRef.current.setRemoteDescription(desc)
	}

	const handleICECandidateEvent = (e: RTCPeerConnectionIceEvent) => {
		if (e.candidate) {
			const payload = {
				target: otherUser.current,
				candidate: e.candidate,
			}
			socket.emit("ice-candidate", payload);
		}
	}

	const handleNewICECandidateMsg = async (incoming: any ) => {
		const candidate = new RTCIceCandidate(incoming);

		await peerRef.current.addIceCandidate(candidate)
	}

	const handleTrackEvent = (e: RTCTrackEvent) => {
		partnerVideo.current.srcObject = e.streams[0];
	}

	return <div>
		<audio autoPlay ref={partnerVideo} />
		<BoardContainer />
	</div>
}

export default Room
