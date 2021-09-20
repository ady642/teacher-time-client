import {SET_ROOM_ID, SET_ROOMS} from "@/context/room/reducers/reducersTypes";
import {StateInterface} from "@/context/state/state";
import {Room} from "@/modules/Room/types";

type actionType = { payload: Room[] | string, type: 'SET_ROOMS' | 'SET_ROOM_ID' }

const roomReducers = (state: StateInterface, action: actionType) => {
	switch (action.type) {
	case SET_ROOMS:
		return { ...state, room: { ...state.room, rooms: action.payload }}
	case SET_ROOM_ID:
		return { ...state, room: { ...state.room, roomID: action.payload }}
	default:
		return state;
	}
}

export default roomReducers
