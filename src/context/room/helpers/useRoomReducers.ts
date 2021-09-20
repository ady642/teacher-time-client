import {useAppContext} from "@/context";
import {SET_ROOM_ID, SET_ROOMS} from "@/context/room/reducers/reducersTypes";
import {Room} from "@/modules/Room/types";

const useRoomReducers = () => {
	const {dispatch} = useAppContext()

	const setRooms = (rooms: Room[]) => {
		dispatch({type: SET_ROOMS, payload: rooms})
	}

	const setRoomID = (roomID: string) => {
		dispatch({type: SET_ROOM_ID, payload: roomID})
	}

	return {
		setRooms,
		setRoomID
	}
}

export default useRoomReducers
