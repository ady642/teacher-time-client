import RegistrationForm, {RegistrationFormInterface} from "@/modules/Auth/models/RegistrationForm";
import { emailRegex } from "@/common/utils/string";

export default class RegistrationValidator {
    exceptions: Map<string, string>
    private email: string
    private password: string
    private confirmationPassword: string

    constructor(registrationForm: RegistrationFormInterface = new RegistrationForm()) {
    	this.email = registrationForm.email
    	this.password = registrationForm.password
    	this.confirmationPassword = registrationForm.confirmationPassword
        this.exceptions = new Map<string, string>()
        this.validate()
    }

    isEmailValid(): boolean {
        if(!emailRegex.test(this.email)) {
            this.exceptions.set('email', 'Email invalide')

            return false
        }

        return true
    }

    isPasswordValid(): boolean {
        if(this.password.length < 5) {
            this.exceptions.set('password', 'Le mot de passe doit être d\'au moins 5 charactères')

            return false
        }

        return true
    }

    isConfirmationPasswordValid(): boolean {
        if(this.confirmationPassword !== this.password) {
            this.exceptions.set('confirmationPassword', 'Confirmation invalide')

            return false
        }

        return true
    }

    validate(): boolean {
        if(this.email)
            this.isEmailValid()

        if(this.password)
            this.isPasswordValid()

        if(this.confirmationPassword)
            this.isConfirmationPasswordValid()

        return this.exceptions.size === 0
    }

    resetExceptions(): void {
        this.exceptions.clear()
    }
}
