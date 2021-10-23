import {Client} from "@/common/utils/client";
import User from "@/modules/Auth/types/User";

export default class UserClient extends Client{
	modifyUser = async(user: Partial<User>): Promise<void> => {
		await this.client.put(`${process.env.SERVER_URL}/users`, user)
	}
}
