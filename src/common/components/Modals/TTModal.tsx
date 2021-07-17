import {FunctionComponent, MutableRefObject} from "react";
import styles from '@/common/components/Modals/modal.module.scss'
import { Close } from "@material-ui/icons";
import useClickOutside from "@/common/hooks/useClickOutside";

interface ModalProps {
    children: JSX.Element;
    handleClose: () => void;
    open: boolean;
    modalContentRef: MutableRefObject<HTMLDivElement>;
    activatorRef: MutableRefObject<HTMLButtonElement>
}

const TTModal: FunctionComponent<ModalProps> = ({
	children,
	handleClose,
	open,
	modalContentRef,
	activatorRef
}) => {

	useClickOutside([modalContentRef, activatorRef], () => {
		if(open) {
			handleClose()
		}
	})

	const displayClass = open ? styles.show : styles.hide

	return <div className={`${styles.modalMask} ${displayClass}`}>
		<div className={`${styles.modalContent} ${displayClass}`}>
			{ children }
			<button onClick={() => handleClose()} className='close'>
				<Close/>
			</button>
		</div>
	</div>
}

export default TTModal
