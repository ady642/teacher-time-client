import User from "@/modules/Auth/types/User";

interface TeacherParams {
	_id: string,
	description: string,
	hourlyRate: number,
	levels: string[],
	fields: string[],
	user: User,
	socketId?: string
}

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
		description = '',
		hourlyRate = 0,
		levels = new Array<string>(),
		fields = new Array<string>(),
		user,
		socketId = ''
	}: TeacherParams) {
		this._id = _id
		this.name = `${user.firstName} ${user.lastName.charAt(0)}.`
		this.avatar = ''
		this.levels = levels
		this.fields = fields
		this.description = description
		this.rating = 5
		this.hourlyRate = hourlyRate
		this.languages = ["fr", "es"]
		this.socketId = socketId
	}

	toJSON() {
		return { ...this }
	}
}
