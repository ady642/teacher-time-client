import {FunctionComponent} from "react";
import Modal from "@/common/components/Modals/Modal";
import {
	Button,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle
} from "@material-ui/core";

interface AboutModalProps {
    open: boolean;
    handleClose: () => void
}

const AboutModal: FunctionComponent<AboutModalProps> = ({ open, handleClose }) => {
	return <Modal open={open} handleClose={handleClose}>
		<DialogTitle id="alert-dialog-title">{"Professeurs indisponibles"}</DialogTitle>
		<DialogContent>
			<DialogContentText className={'text-xl flex flex-col'} id="alert-dialog-description">
				<span>
                    Aucun professeur n'est  disponible en ce  moment.
				</span>
				<span>
					Teacher-time vous remercie  de rappeler plus tard
				</span>
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<Button onClick={handleClose} color="primary">
                Fermer
			</Button>
		</DialogActions>
	</Modal>
}

export default AboutModal
