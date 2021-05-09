export default class Teacher {
    id: string
    name: string
    avatar: string
    description: string
    hasDiploma: boolean
    rating: number
	hourlyRate: number

	constructor({
		id= '',
		name = '',
		avatar = '',
		description = '',
		hasDiploma = false,
		rating = 1,
		hourlyRate = 0
	} = {}) {
		this.id = id
		this.name = name
		this.avatar = avatar
		this.description = description
		this.hasDiploma = hasDiploma
		this.rating = rating
		this.hourlyRate = hourlyRate
	}
}
