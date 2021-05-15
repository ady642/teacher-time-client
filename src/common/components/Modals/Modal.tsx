import {FC} from "react";
import {Dialog} from "@material-ui/core";

interface ModalProps {
    open: boolean;
    handleClose: () => void;
    className?: string
}

const Modal: FC<ModalProps> = ({ handleClose, className, open,children }) => {
	return <Dialog className={className} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
		{ children }
	</Dialog>
}

export default Modal
