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
	const [openedRegisterModal, setOpenedRegisterModal] = useState(false)
	const [registrationForm, setRegistrationForm] = useState(new RegistrationForm())
	const [registrationValidator, setRegistrationValidator] = useState(new RegistrationValidator(registrationForm))
	const registerModalContentRef = useRef<HTMLDivElement>(null)
	const registerActivatorRef = useRef<HTMLButtonElement>(null)
	const { registrationStatus, submitRegister, submitAttempt } = useAuthServices()
	const { openSignInModal, closeRegisterModal, openRegisterModal } = useAuthReducers()
	const { registerModalOpened } = useAuthGetters()

	const clickOnAlreadyExists = () => {
		setOpenedRegisterModal(false)
		closeRegisterModal()
		openSignInModal()
	}

	useEffect(() => {
		setOpenedRegisterModal(registerModalOpened)
	}, [registerModalOpened])

	useEffect(() => {
		openedRegisterModal ? openRegisterModal() : closeRegisterModal()
	}, [openedRegisterModal])

	const register = async () => {
		if(registrationValidator.validate()) {
			try {
				await submitRegister(registrationForm, registrationValidator)
				setTimeout(() => {
					setOpenedRegisterModal(false)
				}, 2000)
			} catch (e) {
				throw new Error(e)
			}
		}
	}

	useEffect(() => {
		if(submitAttempt) {
			setRegistrationValidator(new RegistrationValidator(registrationForm))
			registrationValidator.validate()
		}
	}, [registrationForm, submitAttempt])

	return <>
		<Modal
			className={'rounded-xl'}
			open={openedRegisterModal} handleClose={() => setOpenedRegisterModal(false)}>
			<RegisterModalContent
				registrationForm={registrationForm}
				setRegistrationForm={setRegistrationForm}
				exceptions={registrationValidator.exceptions}
				refContent={registerModalContentRef}
				submitRegistration={register}
				registrationStatus={registrationStatus}
				clickOnAlreadyExists={clickOnAlreadyExists}
			/>
		</Modal>
		<RegisterActivator registerActivatorRef={registerActivatorRef} onClick={() => setOpenedRegisterModal(true)}/>
	</>
}

export default RegisterModal

