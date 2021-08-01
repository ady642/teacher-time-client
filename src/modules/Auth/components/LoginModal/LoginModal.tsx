import {FC, useEffect, useState} from "react";
import Modal from "@/common/components/Modals/Modal";
import LoginActivator from "@/modules/Auth/components/LoginModal/LoginActivator";
import LoginModalContent from "@/modules/Auth/components/LoginModal/LoginModalContent/LoginModalContent";
import LoginForm from "@/modules/Auth/models/LoginForm";
import LoginValidator from "@/modules/Auth/validators/LoginValidator";
import useAuthServices from "@/modules/Auth/services/useAuthServices";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import useAuthReducers from "@/context/auth/helpers/useAuthReducers";

const LoginModal: FC = () => {
	const [openedLoginModal, setOpenedLoginModalState] = useState(false)
	const [loginForm, setLoginForm] = useState(new LoginForm())
	const [loginValidator, setLoginValidator] = useState(new LoginValidator(loginForm))
	const { loginStatus, submitLogin, submitAttempt, loginWithGoogle } = useAuthServices()
	const { signInModalOpened } = useAuthGetters()
	const { openRegisterModal, closeSignInModal, openSignInModal } = useAuthReducers()

	const clickOnNoAccount = () => {
		closeSignInModal()
		openRegisterModal()
	}

	const login = async () => {
		try {
			await submitLogin(loginForm, loginValidator, setOpenedLoginModalState)
		} catch (e) {
			throw new Error(e)
		}
	}

	useEffect(() => {
		setOpenedLoginModalState(signInModalOpened)
	}, [signInModalOpened])

	useEffect(() => {
		openedLoginModal ? openSignInModal() : closeSignInModal()
	}, [openedLoginModal])

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
				submitLogin={login}
				loginStatus={loginStatus}
				clickOnNoAccount={clickOnNoAccount}
				onGoogleButtonClick={loginWithGoogle}
			/>
		</Modal>
		<LoginActivator onClick={() => setOpenedLoginModalState(true)}/>
	</>
}

export default LoginModal
