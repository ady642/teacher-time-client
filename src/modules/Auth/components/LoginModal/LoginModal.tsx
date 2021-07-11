import {FC, useState} from "react";
import Modal from "@/common/components/Modals/Modal";
import LoginActivator from "@/modules/Auth/components/LoginModal/LoginActivator";
import LoginModalContent from "@/modules/Auth/components/LoginModal/LoginModalContent";

const LoginModal: FC = () => {
	const [openedLoginModal, setOpenedLoginModalState] = useState(false)

	return <>
		<Modal open={openedLoginModal} handleClose={() => setOpenedLoginModalState(false)}>
			<LoginModalContent />
		</Modal>
		<LoginActivator onClick={() => setOpenedLoginModalState(true)}/>
	</>
}

export default LoginModal
