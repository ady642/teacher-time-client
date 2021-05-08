import {FC, useEffect, useRef} from "react";
import {useRouter} from "next/router";
import BoardContainer from "@/modules/Call/Whiteboard/BoardContainer";
import { socket } from "@/common/utils/client";

interface RTCPayload {
	target: string,
	caller: string,
	sdp: RTCSessionDescription
}

const Room: FC = () => {
	const router = useRouter()
	const { id } = router.query

	const userVideo = useRef<HTMLVideoElement>()
	const partnerVideo = useRef<HTMLVideoElement>()
	const peerRef = useRef<RTCPeerConnection>()
	const otherUser = useRef<string>()
	const userStream = useRef<MediaStream>()

	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ audio: true, video: true}).then(stream => {
			userVideo.current.srcObject = stream
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
			iceServers: []
		})

		peer.onicecandidate = handleICECandidateEvent
		peer.ontrack = handleTrackEvent
		peer.onnegotiationneeded = () => handleNegotiationNeededEvent(userID)

		return peer
	}

	const handleNegotiationNeededEvent = (userID: string) => {
		peerRef.current.createOffer().then(offer => {
			return peerRef.current.setLocalDescription(offer)
		}).then(() => {
			const payload: RTCPayload = {
				target: userID,
				caller: socket.id,
				sdp: peerRef.current.localDescription
			}

			socket.emit('offer', payload)
		})
	}

	const handleReceiveCall = (incoming: RTCPayload) => {
		peerRef.current = createPeer('');
		const desc = new RTCSessionDescription(incoming.sdp);
		peerRef.current.setRemoteDescription(desc).then(() => {
			userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current));
		}).then(() => {
			return peerRef.current.createAnswer();
		}).then(answer => {
			return peerRef.current.setLocalDescription(answer);
		}).then(() => {
			const payload: RTCPayload = {
				target: incoming.caller,
				caller: socket.id,
				sdp: peerRef.current.localDescription
			}
			socket.emit("answer", payload);
		})
	}

	const handleAnswer = (message: RTCPayload) => {
		const desc = new RTCSessionDescription(message.sdp);
		peerRef.current.setRemoteDescription(desc).catch(e => console.log(e));
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

	const handleNewICECandidateMsg = (incoming: any ) => {
		const candidate = new RTCIceCandidate(incoming);

		peerRef.current.addIceCandidate(candidate)
			.catch(e => console.log(e));
	}

	const handleTrackEvent = (e: RTCTrackEvent) => {
		partnerVideo.current.srcObject = e.streams[0];
	}

	return <div>
		<div>
			<audio autoPlay ref={userVideo} />
			<audio autoPlay ref={partnerVideo} />
		</div>
		<BoardContainer />
	</div>
}

export default Room
