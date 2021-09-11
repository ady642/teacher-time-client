import {useAppContext} from "@/context";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";
import {SET_TEACHER} from "@/context/user/reducers/reducersTypes";

const useUserReducers = () => {
	const {dispatch} = useAppContext()

	const setTeacher = (teacher: Teacher) => dispatch({type: SET_TEACHER, payload: teacher})

	return {
		setTeacher
	}
}

export default useUserReducers
