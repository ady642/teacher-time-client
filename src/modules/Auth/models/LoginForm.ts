export interface LoginFormInterface {
    email: string;
    password: string;
}

export default class LoginForm implements LoginFormInterface {
    email: string;
    password: string;

    constructor({
    	email= '',
    	password = '',
    } = {}) {
    	this.email = email
    	this.password = password
    }
}
