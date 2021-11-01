import {useEffect, useRef} from "react";
import {socket} from "@/common/utils/client";
import {setInterval} from "timers";

const useSocketAudio = (roomID: string) => {
	const chunks = useRef([])

	const partnerAudio = useRef<HTMLAudioElement>(null)

	useEffect(() => {
		socket.on('on-room-joined', () => {
			socket.on('on-receive-speech', async function(arrayBuffer) {
				console.log(arrayBuffer)
				const blob = new Blob(arrayBuffer, {type : 'audio/ogg'})
				partnerAudio.current.src = window.URL.createObjectURL(blob);
				partnerAudio.current.autoplay = true
			});

			navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(stream => {
				const mediaRecorder = new MediaRecorder(stream);

				mediaRecorder.onstart = function() {
					chunks.current = [];
				};
				mediaRecorder.ondataavailable = function(e) {
					chunks.current.push(e.data);
				};
				mediaRecorder.onstop = function() {
					// emit chunks
					socket.emit('speaking', { blobs: chunks.current, roomID });
					chunks.current = [];
					mediaRecorder.start();
				};

				// Start recording
				mediaRecorder.start();

				// Stop recording after 5 seconds and broadcast it to server
				setInterval(function() {
					mediaRecorder.stop()
				}, 1000);
			}).catch((e) => alert(e))
		})
	}, [])

	const joinRoom = () => {
		socket.emit('join-specific-room', roomID)
	}

	return {
		joinRoom,
		partnerAudio
	}
}

export default useSocketAudio
