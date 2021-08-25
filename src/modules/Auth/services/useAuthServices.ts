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
		if(loginValidator.validate()) {
			try {
				setLoginStatus('LOADING')
				const data = await authClient.login(loginForm)
				setLoginStatus('OK')
				setTimeout(() => {
					setToken(data.token)
					setUser(data.user)
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
		if(registrationValidator.validate()) {
			try {
				setRegistrationStatus('LOADING')
				const data = await authClient.register(registrationForm)
				setRegistrationStatus('OK')
				setToken(data.token)
				setUser(data.user)
			} catch (e) {
				setTimeout(() => {
					setRegistrationStatus('ERROR')
				}, 2000)
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
