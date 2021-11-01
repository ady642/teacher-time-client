import React, {FunctionComponent, useEffect, useRef, useState} from "react";
import TTInput from "@/common/components/Inputs/TTInput";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import TailwindCard from "@/common/components/Cards/TailwindCard";

interface testProps {

}

const Test: FunctionComponent<testProps> = () => {
	const [distPeer, setDistPeer] = useState('')
	const [myPeerId, setMyPeerId] = useState('')

	const peer = useRef(null)
	const myAudio = useRef<HTMLAudioElement>(null)

	const call = useRef(null)
	const userStream = useRef<MediaStream>()

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
				setMyPeerId(id)
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
					myAudio.current.srcObject = stream;
					myAudio.current.autoplay = true
				});
			});
		});
	}, [])

	const connectToOtherId = () => {
		// Call a peer, providing our mediaStream
		console.log('jemet la connection')
		call.current = peer.current.call(distPeer, userStream.current);

		call.current.on('stream', function(stream: MediaStream) {
			console.log('je set laudio distant')
			// `stream` is the MediaStream of the remote peer.
			// Here you'd add it to an HTML video/canvas element.
			myAudio.current.srcObject = stream;
			myAudio.current.autoplay = true
		});
	}

	return <div className={'p-5'}>
		<TTInput
			withLabel={true}
			label={'Input Dist Peer'}
			value={distPeer}
			setValue={(value: string) => setDistPeer(value)}
		/>

		<audio ref={myAudio} />

		<TailwindButton className={'p-5'} onClick={connectToOtherId}>
            Connect
		</TailwindButton>

		<TailwindCard className={"mt-6 shadow"}>
            Mon ID: <span className={'text-2xl text-bold'}>{ myPeerId }</span>
		</TailwindCard>
	</div>
}

export default Test
