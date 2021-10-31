import {MutableRefObject} from 'react'
import {OfferIcePayload, RTCIceCandidateInit, RTCSessionDescriptionInit} from "@/modules/Room/types";

interface useWebRTCParams {
    socket: any;
    peers: MutableRefObject<{ [id: string]: RTCPeerConnection }>;
    partnersVideos: MutableRefObject<HTMLAudioElement[]>;
    userStream: MutableRefObject<MediaStream>;
    roomID: string,
}

const useWebRTC = ({
	socket,
	peers,
	partnersVideos,
	userStream,
	roomID
}: useWebRTCParams) => {
	const sendOffer = async (newStudent: string) => {
		peers.current[newStudent] = createPeer()

		userStream.current.getTracks().forEach(track => peers.current[newStudent].addTrack(track, userStream.current));

		const offer: RTCSessionDescriptionInit = await peers.current[newStudent].createOffer();
		await peers.current[newStudent].setLocalDescription(new RTCSessionDescription(offer));

		socket.emit('offer', { offer, newStudent: newStudent });
	}

	const answerToOffer = async ({ offer, offerSender } : { offer: RTCSessionDescriptionInit, offerSender: string } ) => {
		peers.current[offerSender] = createPeer()

		userStream.current.getTracks().forEach(track => peers.current[offerSender].addTrack(track, userStream.current));

		await peers.current[offerSender].setRemoteDescription(offer)
		const answer: RTCSessionDescriptionInit = await peers.current[offerSender].createAnswer();
		await peers.current[offerSender].setLocalDescription(new RTCSessionDescription(answer));

		socket.emit('answer', {answer, offerSender});
	}

	const setAnswerAsRemoteDescription = async ({ answer, newStudent }: { answer: RTCSessionDescriptionInit, newStudent: string }) => {
		await peers.current[newStudent].setRemoteDescription(new RTCSessionDescription(answer))
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
	const setICECandidateMsg = async ({ candidate: candidateInit, from }: { candidate: RTCIceCandidateInit, from: string } ) => {
		const candidate = new RTCIceCandidate(candidateInit);
		await peers.current[from].addIceCandidate(candidate)
	}
	const handleTrackEvent = (e: RTCTrackEvent) => {
		const partnerVideo: HTMLAudioElement = document.createElement('audio')
		partnerVideo.srcObject = e.streams[0];
		partnerVideo.autoplay = true

		partnersVideos.current.push(partnerVideo)
	}
	const createPeer = (): RTCPeerConnection => {
		const peer = new RTCPeerConnection({
			iceServers: [
				{ urls: 'stun:stun1.l.google.com:19302' },
				{ urls: 'stun:stun2.l.google.com:19302' },
				{ urls: 'stun:stun3.l.google.com:19302' },
				{ urls: 'stun:stun4.l.google.com:19302' },
				{ urls: 'stun:stun.teacher-time.com:5349' },
				{
					urls: 'turn:turn.teacher-time.com:5349',
					credential: 'username1',
					username: 'password1'
				}
			],
		})

		peer.onicecandidate = handleICECandidateEvent
		peer.ontrack = handleTrackEvent

		return peer
	}

	return {
	    createPeer,
		sendOffer,
		answerToOffer,
		setAnswerAsRemoteDescription,
		setICECandidateMsg
	}
}

export default useWebRTC
