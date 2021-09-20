import {useAppContext} from "@/context";
import {Room} from "@/modules/Room/types";

const useRoomGetters = () => {
	const { state } = useAppContext()

	const rooms: Room[] = state?.room?.rooms
	const roomID: string = state.room.roomID

	return {
		rooms,
		roomID
	}
}

export default useRoomGetters
