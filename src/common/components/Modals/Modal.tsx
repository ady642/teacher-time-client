import {FC} from "react";
import {Dialog} from "@material-ui/core";

interface ModalProps {
    open: boolean;
    handleClose: () => void;
    className?: string;
    fullScreen?: boolean;
}

const Modal: FC<ModalProps> = ({ handleClose, fullScreen = false, className, open,children }) => {
	return <Dialog fullScreen={fullScreen} className={className} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
		{ children }
	</Dialog>
}

export default Modal
