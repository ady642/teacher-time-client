import {MutableRefObject, useEffect, useRef} from "react";
import {socket} from "@/common/utils/client";

const usePeerJS = (userStream: MutableRefObject<MediaStream>, roomID: string) => {
	const peer = useRef(null)
	const partnerAudio = useRef<HTMLAudioElement>(null)

	const call = useRef(null)

	const connectToStudent = (payload: {
		studentSocketId: string,
		studentPeerId: string,
	}) => {
		// Call a peer, providing our mediaStream
		console.log('jemet la connection à', payload.studentPeerId)
		call.current = peer.current.call(payload.studentPeerId, userStream.current);

		call.current.on('stream', function(stream: MediaStream) {
			console.log('je set laudio distant')
			// `stream` is the MediaStream of the remote peer.
			// Here you'd add it to an HTML video/canvas element.
			partnerAudio.current.srcObject = stream;
			partnerAudio.current.autoplay = true
		});
	}

	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(stream => {
			userStream.current = stream
		}).catch((e) => alert(e))

		import('peerjs').then(({ default: Peer }: {  default: any }) => {
			peer.current = new Peer({
				config: {'iceServers': [
					{ url: 'stun:stun.l.google.com:19302' },
				]} /* Sample servers, please use appropriate ones */
			})

			peer.current.on('open', function(id: string) {
				console.log('My peer ID is: ' + id);
				//socket.emit('join-room', { roomID, peerID: id })
			});

			peer.current.on('call', function(call: any) {
				console.log('je recois un call')

				// Answer the call, providing our mediaStream
				console.log(userStream)
				call.answer(userStream.current);

				call.on('stream', function(stream: MediaStream) {
					console.log('je set laudio distant')
					// `stream` is the MediaStream of the remote peer.
					// Here you'd add it to an HTML video/canvas element.
					partnerAudio.current.srcObject = stream;
					partnerAudio.current.autoplay = true
				});
			});
		});

		return () => {
			peer.current.destroy()
		}
	}, [])

	return {
		connectToStudent,
		partnerAudio
	}
}

export default usePeerJS
