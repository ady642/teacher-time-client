export interface RegistrationFormInterface {
    email: string;
    password: string;
    confirmationPassword: string
}

export default class RegistrationForm implements RegistrationFormInterface {
    email: string;
    password: string;
    confirmationPassword: string

    constructor({
    	email= '',
    	password = '',
    	confirmationPassword = '',
    } = {}) {
    	this.email = email
    	this.password = password
    	this.confirmationPassword = confirmationPassword
    }
}
