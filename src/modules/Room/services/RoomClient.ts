import {Client} from "@/common/utils/client";
import RoomStatsQuery from "@/modules/Room/models/TeacherCreationForm";

export default class RoomClient extends Client {
    sendRoomStats = async (roomStatsQuery: RoomStatsQuery) => {
    	await this.client.post(`${process.env.SERVER_URL}/room`,
    		roomStatsQuery.transformForAPI(),
    	);
    }
}
