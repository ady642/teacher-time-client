// @ts-ignore
import io from 'socket.io-client';




export const createPeerConnectionContext = () => {
	const peerConnection = new RTCPeerConnection({
		iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
	});
	const socket = io(process.env.REACT_APP_SOCKET_URL);

	return new PeerConnectionSession(socket, peerConnection);
};
