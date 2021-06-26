export default class Teacher {
    _id: string
    name: string
    avatar: string
    description: string
    hasDiploma: boolean
    rating: number
	hourlyRate: number
	languages: string[]

	constructor({
		_id= '',
		name = '',
		avatar = '',
		description = '',
		hasDiploma = false,
		rating = 1,
		hourlyRate = 0,
		languages = new Array<string>()
	} = {}) {
		this._id = _id
		this.name = name
		this.avatar = avatar
		this.description = description
		this.hasDiploma = hasDiploma
		this.rating = rating
		this.hourlyRate = hourlyRate
		this.languages = languages
	}
}
