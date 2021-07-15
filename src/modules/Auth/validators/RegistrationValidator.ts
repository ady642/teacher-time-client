import RegistrationForm, {RegistrationFormInterface} from "@/modules/Auth/models/RegistrationForm";
import {emailRegex} from "@/common/utils/string";

export default class RegistrationValidator {
    private email: string
    private password: string
    private confirmationPassword: string

    constructor(registrationForm: RegistrationFormInterface = new RegistrationForm()) {
    	this.email = registrationForm.email
    	this.password = registrationForm.password
    	this.confirmationPassword = registrationForm.confirmationPassword
    }

    isEmailValid(): boolean {
    	return emailRegex.test(this.email)
    }

    isPasswordValid(): boolean {
    	return this.password.length > 5
    }

    isConfirmationPasswordValid(): boolean {
    	return this.confirmationPassword === this.password
    }
}
