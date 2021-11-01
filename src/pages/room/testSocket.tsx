import React, {FunctionComponent, useEffect, useRef, useState} from "react";
import TTInput from "@/common/components/Inputs/TTInput";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import TailwindCard from "@/common/components/Cards/TailwindCard";
import {socket} from "@/common/utils/client";
import {setInterval} from "timers";

interface testProps {

}

const Test: FunctionComponent<testProps> = () => {
	const [roomID, setRoomID] = useState('testYH')
	const [roomJoined, setRoomJoined] = useState('')
	const chunks = useRef([])

	const audioOfOtherUsers = useRef<HTMLAudioElement>(null)

	const userStream = useRef<MediaStream>()

	useEffect(() => {
		socket.on('on-room-joined', () => {
			setRoomJoined(roomID)

			socket.on('on-receive-speech', async function(arrayBuffer) {
				console.log(arrayBuffer)
				const blob = new Blob(arrayBuffer, {type : 'audio/ogg'})
				audioOfOtherUsers.current.src = window.URL.createObjectURL(blob);
				audioOfOtherUsers.current.autoplay = true
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
					socket.emit('speaking', { blobs: chunks.current, roomID: 'testYH' });
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

	return <div className={'p-5'}>
		<TTInput
			className={'mb-3'}
			withLabel={true}
			label={'Input Room ID'}
			value={roomID}
			setValue={(value: string) => {
				setRoomID(value)
			}}
		/>

		<audio ref={audioOfOtherUsers} />

		<TailwindButton className={'p-5'} onClick={joinRoom}>
            Join the room
		</TailwindButton>

		<TailwindCard className={"mt-6 shadow"}>
            Mon SOCKET ID: <span className={'text-2xl text-bold'}>{ socket.id }</span>
		</TailwindCard>

		<TailwindCard className={"mt-6 shadow"}>
			Room ID: <span className={'text-2xl text-bold'}>{ roomJoined }</span>
		</TailwindCard>
	</div>
}

export default Test
