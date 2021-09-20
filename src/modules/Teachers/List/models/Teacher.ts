import User from "@/modules/Auth/types/User";
import { Teacher as TeacherEntity } from "@/modules/Teachers/models/Entity/Teacher"

export default class Teacher {
    _id: string
    name: string
    avatar: string | undefined
    description: string
    rating: number
	hourlyRate: number
	levels: string[]
	fields: string[]
	languages: string[]
	socketId: string | undefined

	constructor({
		_id= '',
		name = '',
		description = '',
		hourlyRate = 0,
		levels = new Array<string>(),
		fields = new Array<string>(),
		socketId = ''
	} = {}) {
		this._id = _id
		this.name = name
		this.levels = levels
		this.fields = fields
		this.description = description
		this.rating = 5
		this.hourlyRate = hourlyRate
		this.languages = ["fr", "es"]
		this.socketId = socketId
	}

	static fromUserAndTeacher(user: User, teacher: TeacherEntity) {
		return new Teacher(
			{
				_id: teacher._id,
				name: `${user.firstName} ${user.lastName.charAt(0)}.`,
				description: teacher.description,
				hourlyRate: teacher.hourlyRate,
				levels: teacher.levels,
				fields: teacher.fields,
			})
	}
}
