import {FC, useEffect, useState} from "react";
import Modal from "@/common/components/Modals/Modal";
import LoginActivator from "@/modules/Auth/components/LoginModal/LoginActivator";
import LoginModalContent from "@/modules/Auth/components/LoginModal/LoginModalContent/LoginModalContent";
import LoginForm from "@/modules/Auth/models/LoginForm";
import LoginValidator from "@/modules/Auth/validators/LoginValidator";
import AuthClient from "@/modules/Auth/services/AuthService";
import useAuthReducers from "@/context/auth/helpers/useAuthReducers";
import RegistrationValidator from "@/modules/Auth/validators/RegistrationValidator";

const LoginModal: FC = () => {
	const [openedLoginModal, setOpenedLoginModalState] = useState(false)
	const [loginForm, setLoginForm] = useState(new LoginForm())
	const [loginValidator, setLoginValidator] = useState(new LoginValidator(loginForm))
	const [submitAttempt, setSubmitAttempt] = useState(false)
	const [loginStatus, setLoginStatus] = useState('')
	const { setToken, setUser } =  useAuthReducers()

	const authClient = new AuthClient()

	const submitLogin = async () => {
		setSubmitAttempt(true)
		if(loginValidator.validate()) {
			try {
				setLoginStatus('PENDING')
				const data = await authClient.login(loginForm)
				setTimeout(() => {
					setLoginStatus('OK')
					setToken(data.token)
					setUser(data.user)
					setTimeout(() => {
						setOpenedLoginModalState(false)
					}, 1000)
				}, 2000)
			} catch (e) {
				setTimeout(() => {
					setLoginStatus('ERROR')
				}, 2000)
			}
		}
	}

	useEffect(() => {
		if(submitAttempt) {
			setLoginValidator(new LoginValidator(loginForm))
			loginValidator.validate()
		}
	}, [loginForm, submitAttempt])

	return <>
		<Modal open={openedLoginModal} handleClose={() => setOpenedLoginModalState(false)}>
			<LoginModalContent
				loginForm={loginForm}
				setLoginForm={setLoginForm}
				exceptions={loginValidator.exceptions}
				submitLogin={submitLogin}
				loginStatus={loginStatus}
			/>
		</Modal>
		<LoginActivator onClick={() => setOpenedLoginModalState(true)}/>
	</>
}

export default LoginModal
