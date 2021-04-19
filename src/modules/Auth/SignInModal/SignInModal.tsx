import {FunctionComponent} from "react";
import SignInModalContent from "@/modules/Auth/SignInModal/SignInModalContent";
import Modal from "@/common/components/Modals/Modal";
import useModal from "@/common/hooks/useModal";
import SignInModalActivator from "@/modules/Auth/SignInModal/SignInModalActivator";

const SignInModal: FunctionComponent = () => {
    const { opened, handleClose, handleOpen } = useModal()

    return <>
        <Modal open={opened} handleClose={handleClose}>
            <SignInModalContent />
        </Modal>
        <SignInModalActivator onClick={handleOpen}/>
    </>
}

export default SignInModal
