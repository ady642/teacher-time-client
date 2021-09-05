export default class TeacherCreationForm {
    field: string;
    description: string;

    constructor({ field = '', description = '' } = {}) {
    	this.field = field
    	this.description = description
    }
}
