import { MutableRefObject } from 'react'
import {OfferIcePayload, RTCIceCandidateInit, RTCSessionDescriptionInit} from "@/modules/Room/types";

interface useWebRTCParams {
    socket: any;
    peerRef: MutableRefObject<RTCPeerConnection>;
    partnerVideo: MutableRefObject<HTMLVideoElement>;
    roomID: string
}

const useWebRTC = ({
	socket,
	peerRef,
	partnerVideo,
	roomID
}: useWebRTCParams) => {
	const sendOffer = async (roomID: string) => {
		const offer: RTCSessionDescriptionInit = await peerRef.current.createOffer();
		console.log('je set loffer as localDescription')
		await peerRef.current.setLocalDescription(new RTCSessionDescription(offer));
		console.log('je send loffer à ', roomID)

		socket.emit('offer', { offer, roomID });
	}

	const answerToOffer = async (offer: RTCSessionDescriptionInit) => {
		console.log('je set loffer as RemoteDescription')
		await peerRef.current.setRemoteDescription(offer)
		const answer: RTCSessionDescriptionInit = await peerRef.current.createAnswer();
		await peerRef.current.setLocalDescription(new RTCSessionDescription(answer));

		socket.emit('answer', {answer, roomID});
	}

	const setAnswerAsLocalDescription = async (answer: RTCSessionDescriptionInit) => {
		console.log('je set lanswser as localdescription')
		await peerRef.current.setRemoteDescription(new RTCSessionDescription(answer))
	}

	const handleICECandidateEvent = (e: RTCPeerConnectionIceEvent) => {
		if (e.candidate) {
			const payload: OfferIcePayload = {
				roomID,
				candidate: e.candidate,
			}
			socket.emit("offer-ice-candidate", payload);
		}
	}
	const setICECandidateMsg = async (candidateInit: RTCIceCandidateInit ) => {
		const candidate = new RTCIceCandidate(candidateInit);
		console.log(candidateInit)
		await peerRef.current.addIceCandidate(candidate)
	}
	const handleTrackEvent = (e: RTCTrackEvent) => {
		partnerVideo.current.srcObject = e.streams[0];
	}
	const createPeer = (): RTCPeerConnection => {
		const peer = new RTCPeerConnection({
			iceServers: [
				{
					"urls": "stun:eu-turn1.xirsys.com"
				},
				{
					"username": "g8wQeEQ8mhJa6uwBXdxGUgwZKIdwMuTHCbwWI7lyDYYpkyTI2K6DM_E8mxxATqWcAAAAAGCxKPN0ZWFjaGVydGltZQ==",
					"urls": "turn:eu-turn1.xirsys.com:80?transport=udp",
					"credential": "8ad306d2-bfda-11eb-af31-0242ac140004"
				},
				{
					"username": "g8wQeEQ8mhJa6uwBXdxGUgwZKIdwMuTHCbwWI7lyDYYpkyTI2K6DM_E8mxxATqWcAAAAAGCxKPN0ZWFjaGVydGltZQ==",
					"urls": "turn:eu-turn1.xirsys.com:3478?transport=udp",
					"credential": "8ad306d2-bfda-11eb-af31-0242ac140004"
				},
				{
					"username": "g8wQeEQ8mhJa6uwBXdxGUgwZKIdwMuTHCbwWI7lyDYYpkyTI2K6DM_E8mxxATqWcAAAAAGCxKPN0ZWFjaGVydGltZQ==",
					"urls": "turn:eu-turn1.xirsys.com:80?transport=tcp",
					"credential": "8ad306d2-bfda-11eb-af31-0242ac140004"
				},
				{
					"username": "g8wQeEQ8mhJa6uwBXdxGUgwZKIdwMuTHCbwWI7lyDYYpkyTI2K6DM_E8mxxATqWcAAAAAGCxKPN0ZWFjaGVydGltZQ==",
					"urls": "turn:eu-turn1.xirsys.com:3478?transport=tcp",
					"credential": "8ad306d2-bfda-11eb-af31-0242ac140004"
				},
				{
					"username": "g8wQeEQ8mhJa6uwBXdxGUgwZKIdwMuTHCbwWI7lyDYYpkyTI2K6DM_E8mxxATqWcAAAAAGCxKPN0ZWFjaGVydGltZQ==",
					"urls": "turns:eu-turn1.xirsys.com:443?transport=tcp",
					"credential": "8ad306d2-bfda-11eb-af31-0242ac140004"
				},
				{
					"username": "g8wQeEQ8mhJa6uwBXdxGUgwZKIdwMuTHCbwWI7lyDYYpkyTI2K6DM_E8mxxATqWcAAAAAGCxKPN0ZWFjaGVydGltZQ==",
					"urls": "turns:eu-turn1.xirsys.com:5349?transport=tcp",
					"credential": "8ad306d2-bfda-11eb-af31-0242ac140004"
				}
			],
		})

		//peer.createDataChannel('test')
		peer.onicecandidate = handleICECandidateEvent
		peer.ontrack = handleTrackEvent

		return peer
	}

	return {
	    createPeer,
		sendOffer,
		answerToOffer,
		setAnswerAsLocalDescription,
		setICECandidateMsg
	}
}

export default useWebRTC
