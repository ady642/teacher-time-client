import  {Client} from "@/common/utils/client";

export default class TeacherClient extends Client{
    get = async (uuid: string) => {
    	const {data} = await this.client.post(`${process.env.SERVER_URL}/teachers/${uuid}`);

    	return data
    }
}
