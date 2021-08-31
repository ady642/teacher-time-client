import RegistrationForm, {RegistrationFormInterface} from "@/modules/Auth/models/RegistrationForm";
import { emailRegex, nameRegex } from "@/common/utils/string";

export default class RegistrationValidator {
    exceptions: Map<string, string>
    protected firstName: string
    protected lastName: string
    protected email: string
    protected password: string
    private confirmationPassword: string

    constructor(registrationForm: RegistrationFormInterface = new RegistrationForm()) {
        this.firstName = registrationForm.firstName
        this.lastName = registrationForm.lastName
    	this.email = registrationForm.email
    	this.password = registrationForm.password
    	this.confirmationPassword = registrationForm.confirmationPassword
        this.exceptions = new Map<string, string>()
        this.validate()
    }

    isFirstNameValid(): boolean {
        if(!nameRegex.test(this.firstName)) {
            this.exceptions.set('firstName', 'Ce prénom n\'est pas valide')

            return false
        }

        return true
    }

    isLastNameValid(): boolean {
        if(!nameRegex.test(this.lastName)) {
            this.exceptions.set('lastName', 'Ce nom n\'est pas valide')

            return false
        }

        return true
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
        if(this.firstName)
            this.isFirstNameValid()

        if(this.lastName)
            this.isLastNameValid()

        if(this.email)
            this.isEmailValid()

        if(this.password)
            this.isPasswordValid()

        if(this.confirmationPassword)
            this.isConfirmationPasswordValid()

        return this.exceptions.size === 0
    }

    isFilled(): boolean {
        return this.email.length > 0 && this.password.length > 0 && this.confirmationPassword.length > 0
    }

    resetExceptions(): void {
        this.exceptions.clear()
    }
}
