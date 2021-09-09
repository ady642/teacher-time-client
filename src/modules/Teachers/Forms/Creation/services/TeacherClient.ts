import {Client} from "@/common/utils/client";
import TeacherCreationForm
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/models/TeacherCreationForm";

export default class TeacherClient extends Client{
	createTeacher = async (teacherCreationForm: TeacherCreationForm) => {
		console.log(teacherCreationForm)
		await this.client.post(`${process.env.SERVER_URL}/teachers/create`,
			{ ...teacherCreationForm.transformForAPI() },
		);
	}
}
