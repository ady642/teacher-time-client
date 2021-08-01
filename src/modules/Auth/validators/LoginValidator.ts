import LoginForm, {LoginFormInterface} from "@/modules/Auth/models/LoginForm";
import { emailRegex } from "@/common/utils/string";

export default class LoginValidator {
    exceptions: Map<string, string>
    private email: string
    private password: string

    constructor(loginForm: LoginFormInterface = new LoginForm()) {
    	this.email = loginForm.email
    	this.password = loginForm.password
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



    validate(): boolean {
        if(this.email)
            this.isEmailValid()

        return this.exceptions.size === 0
    }

    isFilled(): boolean {
        return this.email.length > 0
    }

    resetExceptions(): void {
        this.exceptions.clear()
    }
}
