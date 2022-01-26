import TeacherCreationForm
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/models/TeacherCreationForm";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import TeacherClient from "@/modules/Teachers/services/TeacherClient";
import {useState} from "react";
import useUserReducers from "@/context/user/helpers/useUserReducers";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";
import useRoutePush from "@/common/hooks/useRoutePush";
import constants from "@/common/constants";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import {Periods} from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Bar/PeriodSelector";

const useTeacherClient = () => {
	const { token, user } = useAuthGetters()
	const { teacher } = useUserGetters()
	const { setTeacher } = useUserReducers()
	const teacherClient = new TeacherClient(token)
	const [error, setError] = useState('')
	const { goTo } = useRoutePush()
	const [submitStatus, setSubmitStatus] = useState(constants.SUBMIT_STATUS.PENDING)

	const createTeacher = async (teacherCreationForm: TeacherCreationForm) => {
		try {
			await teacherClient.createTeacher(new TeacherCreationForm(teacherCreationForm))
			await goTo('home')
		} catch (error) {
			setError('Ce profil professeur existe déjà')
		}
	}

	const getTeacher = async () => {
		if(!user._id) {
			return
		}

		try {
			const teacher: Teacher = await teacherClient.getTeacher(user._id)
			setTeacher(teacher)
		} catch (error) {
			setError('Ce profil professeur n\'existe pas')
		}
	}

	const modifyTeacher = async (teacherModified: Partial<Teacher>) => {
		const teacherWithId = {
			...teacherModified,
			teacherID: teacher._id
		}

		try {
			setSubmitStatus(constants.SUBMIT_STATUS.LOADING)
			await teacherClient.modifyTeacher(teacherWithId)
			setSubmitStatus(constants.SUBMIT_STATUS.OK)
			setTeacher({ ...teacher, ...teacherModified })
		} catch (error) {
			setError(error.message)
			setSubmitStatus(constants.SUBMIT_STATUS.ERROR)
		}
	}

	const getStats = async () => {
		if(!teacher?._id) {
			console.error(teacher)
			return
		}

		return await teacherClient.getStats(teacher._id)
	}

	const getStatsIncomes = async (payload: {
		period: Periods;
		startDate: string;
		endDate: string;
	}) => {
		if(!teacher?._id) {
			console.error(teacher)
			return
		}

		return await teacherClient.getStatsIncomes({ teacherId: teacher._id, ...payload })
	}

	const getTopStudents = async () => {
		if(!teacher?._id) {
			console.error(teacher)
			return
		}

		return await teacherClient.getTopStudents(teacher._id)
	}

	return {
		createTeacher,
		getTeacher,
		modifyTeacher,
		error,
		submitStatus,
		getStats,
		getStatsIncomes,
		getTopStudents
	}
}

export default useTeacherClient
