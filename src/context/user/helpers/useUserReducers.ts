import {useAppContext} from "@/context";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";
import {SET_TEACHER, SET_TEACHER_AVAILABLE} from "@/context/user/reducers/reducersTypes";
//import useRoomGetters from "@/context/user/helpers/useRoomGetters";

const useUserReducers = () => {
	const {dispatch} = useAppContext()

	const setTeacher = (teacher: Teacher) => dispatch({type: SET_TEACHER, payload: teacher})
	//const setRoomId =  (roomID: string) => dispatch({type: SET_ROOM_ID, payload: roomID})
	const setTeacherAvailable = (available: boolean) => {
		dispatch({type: SET_TEACHER_AVAILABLE, payload: available})
	}

	return {
		setTeacher,
		setTeacherAvailable
	}
}

export default useUserReducers
