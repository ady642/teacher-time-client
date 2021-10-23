import useUserGetters from "@/context/user/helpers/useUserGetters";
import useUserReducers from "@/context/user/helpers/useUserReducers";
import useRoomManagement from "@/modules/Room/hooks/useRoomManagement";

const useSwitchAvailable = () => {
	const { available } = useUserGetters()
	const { setTeacherAvailable } = useUserReducers()

	const {
		createRoom, deleteRoom,
	} = useRoomManagement()

	const toggleAvailability = () => {
		if(available) {
			deleteRoom()
		} else {
			createRoom()
		}

		setTeacherAvailable(!available)
	}

	return {
		toggleAvailability,
		available
	}
}

export default useSwitchAvailable
