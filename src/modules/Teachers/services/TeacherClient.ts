import {Client} from "@/common/utils/client";
import TeacherCreationForm
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/models/TeacherCreationForm";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";
import {StatIncome} from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/Chart";
import {Periods} from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Bar/PeriodSelector";
import User from "@/modules/Auth/types/User";

export default class TeacherClient extends Client{
	createTeacher = async (teacherCreationForm: TeacherCreationForm) => {
		const payload = teacherCreationForm.transformForAPI()
		await this.client.post(`${process.env.SERVER_URL}/teachers/create`,
			payload,
		);
	}
	getTeacher = async (userId: string): Promise<Teacher> => {
		try {
			const { data } = await this.client.get(`${process.env.SERVER_URL}/teachers/${userId}`)

			return data
		} catch (e) {
			throw new Error(e)
		}
	}
	getTeacherInfo = async (userId: string): Promise<Teacher> => {
		const { data } = await this.client.get(`${process.env.SERVER_URL}/teachers/info/${userId}`)

		return data
	}
	getAll = async (): Promise<Teacher[]> => {
		const { data } = await this.client.get(`${process.env.SERVER_URL}/teachers`)

		return data
	}
	modifyTeacher = async(teacher: Partial<Teacher> & { teacherID: string }): Promise<void> => {
		await this.client.put(`${process.env.SERVER_URL}/teachers`, teacher)
	}
	getStats = async(teacherID: string): Promise<{ totalDuration: number, totalHelped: number }> => {
		const { data } = await this.client.get(`${process.env.SERVER_URL}/room/${teacherID}`)

		return data
	}
	getStatsIncomes = async(payload: {
		teacherId: string;
		period: Periods;
		startDate: string;
		endDate: string;
	}): Promise<StatIncome[]> => {
		const { data } = await this.client.get(`${process.env.SERVER_URL}/room/${payload.teacherId}/stats`, {
			params: {
				period: payload.period,
				startDate: payload.startDate,
				endDate: payload.endDate
			}
		})

		return data
	}
	getTopStudents = async(teacherID: string): Promise<[{ timeHelped: number, student: User }]> => {
		const { data } = await this.client.get(`${process.env.SERVER_URL}/room/${teacherID}/topStudents`)

		return data
	}
}
