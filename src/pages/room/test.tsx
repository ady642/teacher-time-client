import React, {FunctionComponent, useEffect, useRef, useState} from "react";
import TTInput from "@/common/components/Inputs/TTInput";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import {socket} from "@/common/utils/client";
import TailwindCard from "@/common/components/Cards/TailwindCard";

interface testProps {

}

const Test: FunctionComponent<testProps> = () => {
	const [distPeer, setDistPeer] = useState('')
	const [myPeerId, setMyPeerId] = useState('')

	const peer = useRef(null)

	const conn = useRef(null)
	const call = useRef(null)
	const userStream = useRef<MediaStream>()

	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(stream => {
			userStream.current = stream
		})

		import('peerjs').then(({ default: Peer }) => {
			peer.current = new Peer()

			peer.current.on('open', function(id: string) {
				console.log('My peer ID is: ' + id);
				setMyPeerId(id)
			});

			peer.current.on('call', function(call) {
				// Answer the call, providing our mediaStream
				call.answer(userStream.current);
				
				call.on('stream', function(stream) {
					// `stream` is the MediaStream of the remote peer.
					// Here you'd add it to an HTML video/canvas element.
					const partnerVideo: HTMLAudioElement = document.createElement('audio')
					partnerVideo.srcObject = stream;
					partnerVideo.autoplay = true
				});
			});



		});
	}, [])

	const connectToOtherId = () => {
		// Call a peer, providing our mediaStream
		console.log('test ts')
		call.current = peer.current.call(distPeer, userStream.current);
	}

	return <div className={'p-5'}>
		<TTInput
			withLabel={true}
			label={'Input Dist Peer'}
			value={distPeer}
			setValue={(value: string) => setDistPeer(value)}
		/>

		<TailwindButton className={'p-5'} onClick={connectToOtherId}>
            Connect
		</TailwindButton>

		<TailwindCard className={"mt-6 shadow"}>
			Mon ID: <span className={'text-2xl text-bold'}>{ myPeerId }</span>
		</TailwindCard>
	</div>
}

export default Test
