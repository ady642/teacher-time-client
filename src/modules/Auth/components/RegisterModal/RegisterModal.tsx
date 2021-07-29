import {FC, useEffect, useRef, useState} from "react";
import RegisterActivator from "@/modules/Auth/components/RegisterModal/RegisterActivator";
import RegisterModalContent from "@/modules/Auth/components/RegisterModal/RegisterModalContent/RegisterModalContent";
import RegistrationForm from "@/modules/Auth/models/RegistrationForm";
import RegistrationValidator from "@/modules/Auth/validators/RegistrationValidator";
import Modal from "@/common/components/Modals/Modal";
import AuthClient from "@/modules/Auth/services/AuthService";
import useAuthReducers from "@/context/auth/helpers/useAuthReducers";

const RegisterModal: FC = () => {
	const [openedRegisterModal, setOpenedRegisterModalState] = useState(false)
	const [registrationForm, setRegistrationForm] = useState(new RegistrationForm())
	const [registrationValidator, setRegistrationValidator] = useState(new RegistrationValidator(registrationForm))
	const [submitAttempt, setSubmitAttempt] = useState(false)
	const [registrationStatus, setRegistrationStatus] = useState('')
	const registerModalContentRef = useRef<HTMLDivElement>(null)
	const registerActivatorRef = useRef<HTMLButtonElement>(null)
	const { setToken, setUser } =  useAuthReducers()

	const authClient = new AuthClient()

	const submitRegistration = async () => {
		setSubmitAttempt(true)
		if(registrationValidator.isFilled() && registrationValidator.validate()) {
			try {
				setRegistrationStatus('PENDING')
				const data = await authClient.register(registrationForm)
				setTimeout(() => {
					setRegistrationStatus('OK')
					setToken(data.token)
					setUser(data.user)
					setOpenedRegisterModalState(false)
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

