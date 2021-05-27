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
		<DialogTitle id="alert-dialog-title">{"Qui sommes-nous ?"}</DialogTitle>
		<DialogContent>
			<DialogContentText className={'text-xl flex flex-col'} id="alert-dialog-description">
				<span>
                    Teacher-time est une plateforme interactive entièrement
                    gratuite conçue et
                    administrée par Yves Haïk.
				</span>

				<span>
                    Élèves et professeurs sont mis en relation par
                    l'intermédiaire d'un tableau blanc et d'un microphone.
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
