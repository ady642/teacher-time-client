export default class TeacherCreationForm {
    field: string;
    description: string;
    hourlyRate: number

    constructor({ field = '', description = '', hourlyRate = 20 } = {}) {
    	this.field = field
    	this.description = description
    	this.hourlyRate = hourlyRate
    }
}
