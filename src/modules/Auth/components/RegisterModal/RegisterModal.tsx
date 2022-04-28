import {FC, useEffect, useRef, useState} from "react";
import RegisterActivator from "@/modules/Auth/components/RegisterModal/RegisterActivator";
import RegisterModalContent from "@/modules/Auth/components/RegisterModal/RegisterModalContent/RegisterModalContent";
import RegistrationForm from "@/modules/Auth/models/RegistrationForm";
import RegistrationValidator from "@/modules/Auth/validators/RegistrationValidator";
import Modal from "@/common/components/Modals/Modal";
import useAuthServices from "@/modules/Auth/services/useAuthServices";
import useAuthReducers from "@/context/auth/helpers/useAuthReducers";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";

const RegisterModal: FC = () => {
	const [registrationForm, setRegistrationForm] = useState(new RegistrationForm())
	const [registrationValidator, setRegistrationValidator] = useState(new RegistrationValidator(registrationForm))
	const registerModalContentRef = useRef<HTMLDivElement>(null)
	const registerActivatorRef = useRef<HTMLButtonElement>(null)
	const { registrationStatus, submitRegister, loginWithGoogle } = useAuthServices()
	const { openSignInModal, closeRegisterModal, openRegisterModal } = useAuthReducers()
	const { registerModalOpened } = useAuthGetters()

	const clickOnAlreadyExists = () => {
		closeRegisterModal()
		openSignInModal()
	}

	const register = async (e: Event) => {
		e.preventDefault(); // remove refresh when click on submit button
		if(registrationValidator.validate()) {
			try {
				await submitRegister(registrationForm, registrationValidator)
				setTimeout(() => {
					closeRegisterModal()
				}, 2000)
			} catch (e) {
				console.warn('Failed to submit registration')
			}
		}
	}

	useEffect(() => {
		setRegistrationValidator(new RegistrationValidator(registrationForm))
		registrationValidator.validate()
	}, [registrationForm])

	return <>
		<Modal
			className={'rounded-xl'}
			open={registerModalOpened} handleClose={() => closeRegisterModal()}>
			<RegisterModalContent
				registrationForm={registrationForm}
				setRegistrationForm={setRegistrationForm}
				exceptions={registrationValidator.exceptions}
				refContent={registerModalContentRef}
				submitRegistration={register}
				registrationStatus={registrationStatus}
				clickOnAlreadyExists={clickOnAlreadyExists}
				onGoogleButtonClick={loginWithGoogle}
			/>
		</Modal>
		<RegisterActivator registerActivatorRef={registerActivatorRef} onClick={() => openRegisterModal()}/>
	</>
}

export default RegisterModal

