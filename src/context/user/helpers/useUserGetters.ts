import {useAppContext} from "@/context";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";

const useUserGetters = () => {
	const { state } = useAppContext()

	const teacher: Teacher = state.user.teacher
	const available: boolean = state.user.available

	return {
		teacher,
		available
	}
}

export default useUserGetters
