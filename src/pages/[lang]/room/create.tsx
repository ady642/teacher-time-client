import {FunctionComponent} from "react";
import {socket} from "@/common/utils/client";
import useRoutePush from "@/common/hooks/useRoutePush";
import { uuid } from "uuidv4";

interface CreateRoomProps {

}

const CreateRoom: FunctionComponent<CreateRoomProps> = () => {
	const { goTo } = useRoutePush()

	const createRoom = async () => {
		const roomId = uuid()
		await socket.emit('create-room', roomId)
		await goTo('fr', `room/${roomId}`)
	}

	const deleteRoom = async () => {
		await socket.emit('delete-room', '6098d3c3a5383e2bac0ee5a6')
		await goTo('fr', '/')
	}

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
