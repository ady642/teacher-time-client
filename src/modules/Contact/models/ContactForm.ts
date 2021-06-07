class ContactForm {
    email: string;
    level: string;
    field: string;
    message: string;

    constructor({
    	email= '',
    	level = '',
    	field = '',
    	message = '',
    } = {}) {
    	this.email = email
    	this.level = level
    	this.field = field
    	this.message = message
    }

}

export default ContactForm
