import {FunctionComponent, useEffect} from "react";
import {socket} from "@/common/utils/client";
import useRoutePush from "@/common/hooks/useRoutePush";
import { v4 } from "uuid";

interface CreateRoomProps {

}

const CreateRoom: FunctionComponent<CreateRoomProps> = () => {
	const { goTo } = useRoutePush()

	const createRoom = () => {
		const roomID = v4()
		console.log('test')
		socket.emit('create-room', roomID)
	}

	const deleteRoom = async () => {
		await socket.emit('delete-room', '6098d3c3a5383e2bac0ee5a6')
		await goTo('fr', '/')
	}

	useEffect(() => {
		socket.on('on-room-created', async (roomID: string) => await goTo('fr', `room/${roomID}`))
	})

	return <div>
		<button className={'bg-green-500 text-white rounded p-5'} onClick={createRoom}>
            Create room
		</button>
		<button className={'bg-red-500  text-white rounded ml-6 mt-5 p-5'} onClick={deleteRoom}>
			Delete Room
		</button>
	</div>
}

export default CreateRoom
