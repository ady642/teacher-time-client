import {FunctionComponent} from "react";
import SignInModalContent from "@/modules/Auth/SignInModal/SignInModalContent";
import Modal from "@/common/components/Modals/Modal";
import SignInModalActivator from "@/modules/Auth/SignInModal/SignInModalActivator";

interface SignInModalProps {
    opened: boolean,
    handleClose: () => void,
    handleOpen: () => void
}

const SignInModal: FunctionComponent<SignInModalProps> = ({ opened, handleClose, handleOpen }) => {
	return <>
		<Modal open={opened} handleClose={handleClose}>
			<SignInModalContent />
		</Modal>
		<SignInModalActivator onClick={handleOpen}/>
	</>
}

export default SignInModal
