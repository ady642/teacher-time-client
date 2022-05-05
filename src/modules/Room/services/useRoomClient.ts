import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import useRoutePush from "@/common/hooks/useRoutePush";
import RoomClient from "@/modules/Room/services/RoomClient";
import RoomStatsQuery from "../models/TeacherCreationForm";

const useRoomClient = () => {
	const { token } = useAuthGetters()
	const roomClient = new RoomClient(token)
	const { goTo } = useRoutePush()

	const sendRoomStats = async (roomStatsQuery: RoomStatsQuery) => {
		await roomClient.sendRoomStats(roomStatsQuery)
		await goTo('home')
	}

	return {
		sendRoomStats,
	}
}

export default useRoomClient
