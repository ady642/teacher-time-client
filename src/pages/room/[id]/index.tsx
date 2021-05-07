import styles from '@/modules/Room/styles.module.css';
import { OrganismsHeader, OrganismsMain } from '@/modules/Room/components/organisms';
import { MoleculesLocalVideo, MoleculesRemoteVideo, MoleculesVideoControls } from '@/modules/Room/components/molecules';
import React, { useEffect, useRef, useState } from 'react';
import {useRouter} from "next/router";
import { socket } from "@/common/utils/client";

const senders: any[] = [];

function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

class PeerConnectionSession {
	_onConnected: any;
	_onDisconnected: any;
	_room: any;
	socket: any;
	peerConnection: any;
	RTCSessionDescription: any;

	constructor(socket: any, peerConnection: RTCPeerConnection, RTCSessionDescription: any) {
		this.socket = socket;
		this.peerConnection = peerConnection;
		this.RTCSessionDescription = RTCSessionDescription

		this.peerConnection.addEventListener('connectionstatechange', (event: any) => {
			// @ts-ignore
			const fn = this['_on' + capitalizeFirstLetter(this.peerConnection.connectionState)];
			fn && fn(event);
		});
		this.onCallMade();
	}

	isAlreadyCalling = false;
	getCalled = false;

	async callUser(to: any) {
		const offer = await this.peerConnection.createOffer();
		await this.peerConnection.setLocalDescription(new RTCSessionDescription(offer));

		this.socket.emit('call-user', { offer, to });
	}

	onConnected(callback: () => void) {
		this._onConnected = callback;
	}

	onDisconnected(callback: () => void) {
		this._onDisconnected = callback;
	}

	joinRoom(room: string | string[]) {
		this._room = room;
		this.socket.emit('join-room', room);
	}

	onCallMade() {
		this.socket.on('call-made', async (data: { socket: any; offer: RTCSessionDescription; }) => {
			if (this.getCalled) {
				const confirmed = window.confirm(`User "Socket: ${data.socket}" wants to call you. Do accept this call?`);

				if (!confirmed) {
					this.socket.emit('reject-call', {
						from: data.socket,
					});

					return;
				}
			}

			await this.peerConnection.setRemoteDescription(new RTCSessionDescription(data.offer));
			const answer = await this.peerConnection.createAnswer();
			await this.peerConnection.setLocalDescription(new RTCSessionDescription(answer));

			this.socket.emit('make-answer', {
				answer,
				to: data.socket,
			});
			this.getCalled = true;
		});
	}

	onRemoveUser(callback: { (socketId: any): void; (arg0: any): void; }) {
		this.socket.on(`${this._room}-remove-user`, ({ socketId = '' }) => {
			callback(socketId);
		});
	}

	onUpdateUserList(callback: any) {
		this.socket.on(`${this._room}-update-user-list`, ({ users = [] }) => {
			callback(users);
		});
	}

	onAnswerMade(callback: { (socket: any): Promise<void>; (arg0: any): void; }) {
		this.socket.on('answer-made', async (data: { answer: RTCSessionDescription; socket: any; }) => {
			await this.peerConnection.setRemoteDescription(new RTCSessionDescription(data.answer));

			if (!this.isAlreadyCalling) {
				callback(data.socket);
				this.isAlreadyCalling = true;
			}
		});
	}

	onCallRejected(callback: { (data: { socket: any; }): void; (arg0: any): void; }) {
		this.socket.on('call-rejected', (data: any) => {
			callback(data);
		});
	}

	onTrack(callback: { (stream: any): any; (arg0: any): void; }) {
		// @ts-ignore
		this.peerConnection.ontrack = function ({ streams: [stream] }) {
			callback(stream);
		};
	}
}

const Room = () => {
	const [peerVideoConnection, setPeerConnection] = useState(null)
	const router = useRouter()
	const { id } = router.query
	const [connectedUsers, setConnectedUsers] = useState([]);
	const [userMediaStream, setUserMediaStream] = useState(null);
	const [displayMediaStream, setDisplayMediaStream] = useState(null);
	const [startTimer, setStartTimer] = useState(false);

	const localVideo = useRef();
	const remoteVideo = useRef();
	const mainRef = useRef();

	useEffect(() => {
		const createMediaStream = async () => {
			if (!userMediaStream) {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: {
						width: { min: 640, ideal: 1920 },
						height: { min: 400, ideal: 1080 },
						aspectRatio: { ideal: 1.7777777778 },
					},
					audio: true,
				});

				localVideo.current.srcObject = stream;

				stream.getTracks().forEach((track) => {
					senders.push(peerVideoConnection.peerConnection.addTrack(track, stream));
				});

				setUserMediaStream(stream);
			}
		};

		createMediaStream();
	}, [userMediaStream]);

	useEffect(() => {
		const { RTCPeerConnection, RTCSessionDescription } = window;
		const peerConnection = new RTCPeerConnection();
		setPeerConnection(new PeerConnectionSession(socket, peerConnection, RTCSessionDescription))

		console.log(peerConnection)

		peerVideoConnection.joinRoom(id);
		peerVideoConnection.onRemoveUser((socketId: any) =>
			setConnectedUsers((users) => users.filter((user) => user !== socketId)),
		);
		peerVideoConnection.onUpdateUserList((users: React.SetStateAction<any[]>) => setConnectedUsers(users));
		peerVideoConnection.onAnswerMade((socket: any) => peerVideoConnection.callUser(socket));
		peerVideoConnection.onCallRejected((data: { socket: any; }) => alert(`User: "Socket: ${data.socket}" rejected your call.`));
		// @ts-ignore
		peerVideoConnection.onTrack((stream: any) => (remoteVideo.current.srcObject = stream));

		peerVideoConnection.onConnected(() => {
			setStartTimer(true);
		});
		peerVideoConnection.onDisconnected(() => {
			setStartTimer(false);
			// @ts-ignore
			remoteVideo.current.srcObject = null;
		});
	}, []);

	async function shareScreen() {
		// @ts-ignore
		const stream = displayMediaStream || (await navigator.mediaDevices.getDisplayMedia());

		await senders.find((sender) => sender.track.kind === 'video').replaceTrack(stream.getTracks()[0]);

		stream.getVideoTracks()[0].addEventListener('ended', () => {
			cancelScreenSharing(stream);
		});

		// @ts-ignore
		localVideo.current.srcObject = stream;

		setDisplayMediaStream(stream);
	}

	async function cancelScreenSharing(stream: { getTracks: () => any[]; }) {
		await senders
			.find((sender) => sender.track.kind === 'video')
			.replaceTrack(userMediaStream.getTracks().find((track: { kind: string; }) => track.kind === 'video'));

		// @ts-ignore
		localVideo.current.srcObject = userMediaStream;
		stream.getTracks().forEach((track) => track.stop());
		setDisplayMediaStream(null);
	}

	async function handleScreenSharing(isScreenShared: boolean) {
		if (isScreenShared) {
			await shareScreen();
		} else {
			await cancelScreenSharing(displayMediaStream);
		}
	}

	return (
		<div className={styles.container}>
			<OrganismsHeader
				onNavItemSelect={(user: { id: any; }) => peerVideoConnection.callUser(user.id)}
				navItems={connectedUsers.map((user) => ({ id: user, title: user }))}
				title="WebRTC Example"
			/>

			<OrganismsMain ref={mainRef}>
				<MoleculesRemoteVideo ref={remoteVideo} autoPlay />
				<MoleculesLocalVideo ref={localVideo} autoPlay muted />
				<MoleculesVideoControls
					isScreenSharing={Boolean(displayMediaStream)}
					onScreenShare={handleScreenSharing}
					isTimerStarted={startTimer}
				/>
			</OrganismsMain>
		</div>
	);
};

export default Room
