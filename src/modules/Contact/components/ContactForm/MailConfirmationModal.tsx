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
		<DialogTitle id="alert-dialog-title">{"Demande d'inscription"}</DialogTitle>
		<DialogContent>
			<DialogContentText className={'text-xl flex flex-col'} id="alert-dialog-description">
				<span>
					Nous avons bien reçu votre demande d'inscription.

					Nous vous contacterons dès que les cours et conférences seront en place.
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
