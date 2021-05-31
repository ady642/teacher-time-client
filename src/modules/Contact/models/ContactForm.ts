class ContactForm {
    email: string;
    level: string;
    field: string;

    constructor({
    	email= '',
    	level = '',
    	field = '',
    } = {}) {
    	this.email = email
    	this.level = level
    	this.field = field
    }

}

export default ContactForm
