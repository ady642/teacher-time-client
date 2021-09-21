import {trimAndLowerCase} from "@/common/utils/string";

export interface RegistrationFormInterface {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmationPassword: string
}

export default class RegistrationForm implements RegistrationFormInterface {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmationPassword: string

    constructor({
    	firstName = '',
    	lastName = '',
    	email= '',
    	password = '',
    	confirmationPassword = '',
    } = {}) {
    	this.firstName = firstName
    	this.lastName = lastName
    	this.email = email
    	this.password = password
    	this.confirmationPassword = confirmationPassword
    }

    transformForAPI() {
    	return {
    		firstName: trimAndLowerCase(this.firstName),
    		lastName: trimAndLowerCase(this.lastName),
    		email: trimAndLowerCase(this.email),
    		password: this.password,
    		confirmationPassword: this.confirmationPassword
    	}
    }
}
