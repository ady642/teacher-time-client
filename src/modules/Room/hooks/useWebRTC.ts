import { MutableRefObject } from 'react'
import {OfferIcePayload, RTCIceCandidateInit, RTCSessionDescriptionInit} from "@/modules/Room/types";

interface useWebRTCParams {
    socket: any;
    peerRef: MutableRefObject<RTCPeerConnection>;
    otherUser: MutableRefObject<string>;
    partnerVideo: MutableRefObject<HTMLVideoElement>
}

const useWebRTC = ({
	socket,
	peerRef,
	otherUser,
	partnerVideo
}: useWebRTCParams) => {
	const sendOffer = async (to: string) => {
		console.log('je send loffer à ', to)
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
		console.log('je set lanswser as localdescription')
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
		partnerVideo.current.srcObject = e.streams[0];
	}
	const createPeer = (): RTCPeerConnection => {
		const peer = new RTCPeerConnection({
			iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
		})

		peer.createDataChannel('test')
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
