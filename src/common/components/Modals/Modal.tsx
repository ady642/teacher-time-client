import {FC} from "react";
import {Dialog} from "@material-ui/core";

interface ModalProps {
    open: boolean;
    handleClose: () => void
}

const Modal: FC<ModalProps> = ({ handleClose,open,children }) => {
	return <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
		{ children }
	</Dialog>
}

export default Modal
