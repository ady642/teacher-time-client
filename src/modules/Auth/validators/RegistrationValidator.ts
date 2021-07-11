import RegistrationForm, {RegistrationFormInterface} from "@/modules/Auth/models/RegistrationForm";
import {emailRegex} from "@/common/utils/string";

export default class RegistrationValidator implements RegistrationFormInterface {
    email: string;
    password: string;
    confirmationPassword: string;

    constructor(registrationForm: RegistrationFormInterface = new RegistrationForm()) {
    	this.email = registrationForm.email
    	this.password = registrationForm.password
    	this.confirmationPassword = registrationForm.confirmationPassword
    }

    isEmailValid(): boolean {
    	return emailRegex.test(this.email)
    }
}
