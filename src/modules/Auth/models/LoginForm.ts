import {trimAndLowerCase} from "@/common/utils/string";

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

    transformForAPI() {
    	return {
    		email: trimAndLowerCase(this.email),
    		password: this.password
    	}
    }
}
