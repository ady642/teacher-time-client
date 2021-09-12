import {Client} from "@/common/utils/client";
import TeacherCreationForm
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/models/TeacherCreationForm";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";

export default class TeacherClient extends Client{
	createTeacher = async (teacherCreationForm: TeacherCreationForm) => {
		const payload = teacherCreationForm.transformForAPI()
		await this.client.post(`${process.env.SERVER_URL}/teachers/create`,
			payload,
		);
	}
	getTeacher = async (userId: string): Promise<Teacher> => {
		const { data } = await this.client.get(`${process.env.SERVER_URL}/teachers/${userId}`)

		return data
	}
}
