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
		setOpenedLoginModalState: (opened: boolean) => void
	) => {
		setSubmitAttempt(true)
		if(loginValidator.validate()) {
			try {
				setLoginStatus('PENDING')
				const data = await authClient.login(loginForm)
				setTimeout(() => {
					setLoginStatus('OK')
					setToken(data.token)
					setUser(data.user)
					setOpenedLoginModalState(false)
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
		setOpenedRegisterModal: (opened: boolean) => void
	) => {
		setSubmitAttempt(true)
		if(registrationValidator.isFilled() && registrationValidator.validate()) {
			try {
				setRegistrationStatus('PENDING')
				const data = await authClient.register(registrationForm)
				setTimeout(() => {
					setRegistrationStatus('OK')
					setToken(data.token)
					setUser(data.user)
					setOpenedRegisterModal(false)
				}, 2000)
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
