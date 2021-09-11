import TeacherCreationForm
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/models/TeacherCreationForm";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import TeacherClient from "@/modules/Teachers/services/TeacherClient";
import {useState} from "react";
import useUserReducers from "@/context/user/helpers/useUserReducers";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";

const useTeacherClient = () => {
	const { token, user } = useAuthGetters()
	const { setTeacher } = useUserReducers()
	const teacherClient = new TeacherClient(token)
	const [error, setError] = useState('')

	const createTeacher = async (teacherCreationForm: TeacherCreationForm) => {
		try {
			await teacherClient.createTeacher(new TeacherCreationForm(teacherCreationForm))
		} catch (error) {
			setError('Ce profil professeur existe déjà')
		}
	}

	const getTeacher = async () => {
		try {
			const teacher: Teacher = await teacherClient.getTeacher(user.id)
			setTeacher(teacher)
		} catch (error) {
			setError('Ce profil professeur n\'existe pas')
		}
	}

	return {
		createTeacher,
		getTeacher,
		error
	}
}

export default useTeacherClient
