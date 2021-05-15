import {FunctionComponent} from "react";
import Modal from "@/common/components/Modals/Modal";
import {CircularProgress, DialogContent} from "@material-ui/core";

interface LoadingModalProps {
    open: boolean;
    handleClose: () => void
}

const LoadingModal: FunctionComponent<LoadingModalProps> = ({ open, handleClose }) => {
	return <Modal open={open} handleClose={handleClose}>
		<DialogContent className={'bg-transparent'}>
			<CircularProgress />
		</DialogContent>
	</Modal>
}

export default LoadingModal
