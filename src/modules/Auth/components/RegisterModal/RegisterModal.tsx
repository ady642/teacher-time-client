import {FC, useEffect, useRef, useState} from "react";
import RegisterActivator from "@/modules/Auth/components/RegisterModal/RegisterActivator";
import RegisterModalContent from "@/modules/Auth/components/RegisterModal/RegisterModalContent/RegisterModalContent";
import RegistrationForm from "@/modules/Auth/models/RegistrationForm";
import RegistrationValidator from "@/modules/Auth/validators/RegistrationValidator";
import Modal from "@/common/components/Modals/Modal";
import AuthClient from "@/modules/Auth/services/AuthService";

const RegisterModal: FC = () => {
	const [openedRegisterModal, setOpenedRegisterModalState] = useState(false)
	const [registrationForm, setRegistrationForm] = useState(new RegistrationForm())
	const [registrationValidator, setRegistrationValidator] = useState(new RegistrationValidator(registrationForm))
	const [submitAttempt, setSubmitAttempt] = useState(false)
	const [registrationStatus, setRegistrationStatus] = useState('')
	const registerModalContentRef = useRef<HTMLDivElement>(null)
	const registerActivatorRef = useRef<HTMLButtonElement>(null)

	const authClient = new AuthClient()

	const submitRegistration = async () => {
		setSubmitAttempt(true)
		if(registrationValidator.validate() && registrationValidator.isFilled()) {
			try {
				setRegistrationStatus('PENDING')
				await authClient.register(registrationForm)
				setTimeout(() => {
					setRegistrationStatus('OK')
				}, 2000)
			} catch (e) {
				setTimeout(() => {
					setRegistrationStatus('ERROR')
				}, 2000)
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
			open={openedRegisterModal} handleClose={() => setOpenedRegisterModalState(false)}>
			<RegisterModalContent
				registrationForm={registrationForm}
				setRegistrationForm={setRegistrationForm}
				exceptions={registrationValidator.exceptions}
				refContent={registerModalContentRef}
				submitRegistration={submitRegistration}
				registrationStatus={registrationStatus}
			/>
		</Modal>
		<RegisterActivator registerActivatorRef={registerActivatorRef} onClick={() => setOpenedRegisterModalState(true)}/>
	</>
}

export default RegisterModal

