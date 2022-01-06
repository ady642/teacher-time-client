import {useState} from "react";
import useAuthReducers from "@/context/auth/helpers/useAuthReducers";
import AuthClient from "@/modules/Auth/services/AuthService";
import LoginForm from "@/modules/Auth/models/LoginForm";
import LoginValidator from "@/modules/Auth/validators/LoginValidator";
import RegistrationForm from "@/modules/Auth/models/RegistrationForm";
import RegistrationValidator from "../validators/RegistrationValidator";

const useAuthServices = () => {
	const [submitAttempt, setSubmitAttempt] = useState(false)
	const [loginStatus, setLoginStatus] = useState('')
	const [registrationStatus, setRegistrationStatus] = useState('')
	const { setToken, setUser } =  useAuthReducers()

	const authClient = new AuthClient()

	const loginWithGoogle = async () => {
		await authClient.loginWithGoogle('google')
	}

	const submitLogin = async (
		loginForm: LoginForm,
		loginValidator: LoginValidator,
	) => {
		setSubmitAttempt(true)
		const loginFormValid = loginValidator.validate()
		if(loginFormValid) {
			try {
				setLoginStatus('LOADING')
				const data = await authClient.login(new LoginForm(loginForm))
				setLoginStatus('OK')
				setUser(data.user)
				setTimeout(async () => {
					setToken(data.token)
				}, 2000)
			} catch (e) {
				setTimeout(() => {
					setLoginStatus('ERROR')
				}, 2000)
			}
		}
	}
	const submitRegister = async (
		registrationForm: RegistrationForm,
		registrationValidator: RegistrationValidator,
	) => {
		setSubmitAttempt(true)
		const registrationFormValid = registrationValidator.validate() && registrationValidator.isFilled()
		if(registrationFormValid) {
			try {
				setRegistrationStatus('LOADING')
				const data = await authClient.register(new RegistrationForm(registrationForm))
				setRegistrationStatus('OK')
				setUser(data.user)

				setTimeout(() => {
					setToken(data.token)
				}, 2000)			}
			catch (e) {
				setTimeout(() => {
					setRegistrationStatus('ERROR')
				}, 2000)
				throw new Error('this user already exists')
			}
		}
	}

	return {
		loginWithGoogle,
		submitLogin,
		submitRegister,
		loginStatus,
		registrationStatus,
		submitAttempt
	}
}

export default useAuthServices
