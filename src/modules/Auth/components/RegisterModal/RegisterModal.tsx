import {FC, useEffect, useRef, useState} from "react";
import RegisterActivator from "@/modules/Auth/components/RegisterModal/RegisterActivator";
import RegisterModalContent from "@/modules/Auth/components/RegisterModal/RegisterModalContent/RegisterModalContent";
import RegistrationForm from "@/modules/Auth/models/RegistrationForm";
import RegistrationValidator from "@/modules/Auth/validators/RegistrationValidator";
import Modal from "@/common/components/Modals/Modal";

const RegisterModal: FC = () => {
	const [openedRegisterModal, setOpenedRegisterModalState] = useState(false)
	const [registrationForm, setRegistrationForm] = useState(new RegistrationForm())
	const [registrationValidator, setRegistrationValidator] = useState(new RegistrationValidator(registrationForm))
	const [submitAttempt, setSubmitAttempt] = useState(false)
	const registerModalContentRef = useRef<HTMLDivElement>(null)
	const registerActivatorRef = useRef<HTMLButtonElement>(null)

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
				submitRegistration={() => setSubmitAttempt(true)}
			/>
		</Modal>
		<RegisterActivator registerActivatorRef={registerActivatorRef} onClick={() => setOpenedRegisterModalState(true)}/>
	</>
}

export default RegisterModal

