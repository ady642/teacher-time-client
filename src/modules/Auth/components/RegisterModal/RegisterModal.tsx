import {FC, useState} from "react";
import Modal from "@/common/components/Modals/Modal";
import RegisterActivator from "@/modules/Auth/components/RegisterModal/RegisterActivator";
import RegisterModalContent from "@/modules/Auth/components/RegisterModal/RegisterModalContent/RegisterModalContent";
import RegistrationForm from "@/modules/Auth/models/RegistrationForm";

const RegisterModal: FC = () => {
	const [openedRegisterModal, setOpenedRegisterModalState] = useState(false)
	const [registrationForm, setRegistrationForm] = useState(new RegistrationForm())

	return <>
		<Modal open={openedRegisterModal} handleClose={() => setOpenedRegisterModalState(false)}>
			<RegisterModalContent />
		</Modal>
		<RegisterActivator onClick={() => setOpenedRegisterModalState(true)}/>
	</>
}

export default RegisterModal
