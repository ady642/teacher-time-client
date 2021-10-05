import  {Client} from "@/common/utils/client";

export default class TeacherClient extends Client{
    get = async (uuid: string | string[]) => {
    	const {data} = await this.client.get(`${process.env.SERVER_URL}/teachers/${uuid}`);

    	return data
    }
}
