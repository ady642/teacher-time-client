import {useAppContext} from "@/context";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";

const useUserGetters = () => {
	const { state } = useAppContext()

	const teacher: Teacher = state.user.teacher

	return {
		teacher
	}
}

export default useUserGetters
