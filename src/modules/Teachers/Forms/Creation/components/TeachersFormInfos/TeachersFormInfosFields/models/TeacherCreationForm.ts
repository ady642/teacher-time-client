export default class TeacherCreationForm {
    fields: Set<string>;
    description: string;
    hourlyRate: number;
    levels: Set<string>;

    constructor({
    	fields = new Set<string>(),
    	description = '',
    	hourlyRate = 20,
    	levels = new Set<string>()
    } = {}) {
    	this.fields = fields
    	this.description = description
    	this.hourlyRate = hourlyRate
    	this.levels = levels
    }

    transformForAPI() {
    	return {
    		fields: [...this.fields],
    		levels: [...this.levels],
    		description: this.description,
    		hourlyRate: this.hourlyRate
    	}
    }
}
