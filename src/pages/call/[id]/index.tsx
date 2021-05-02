import {FC, useEffect, useState} from "react";
// @ts-ignore
import io from 'socket.io-client';
import {useRouter} from "next/router";
import '../../../modules/Call/Whiteboard/style.module.css'

const Call: FC = () => {
	const router = useRouter()
	const { id } = router.query
	const [socket, setSocket] = useState(io(process.env.SOCKET_SERVER))


	useEffect(() => {
		fetch('/api/teachers/get_online_teachers').finally(() => {
			socket.on('drawing', data => console.log('je recois la data'));
			socket.on('connection', data => console.log('je recois la data'));
		})
	})

	const emit = () => {
		socket.emit('drawing', { name: 'Nest' }, (data: any) => console.log('jai envoyé la data'));
	}

	return <div>
		{ id }
		<canvas className="whiteboard"/>

		<button onClick={() => emit()}>Test emit</button>

		<div className="colors">
			<div className="color black" />
			<div className="color red" />
			<div className="color green" />
			<div className="color blue" />
			<div className="color yellow" />
		</div>
	</div>
}

export default Call
