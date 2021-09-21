import {FunctionComponent} from "react";
import Modal from "@/common/components/Modals/Modal";
import {DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import SimpleButton from "@/common/components/Buttons/SimpleButton";
import useTranslation from "@/common/hooks/useTranslation";

interface ModalAcceptationProps {
    displayAcceptModal: boolean;
    handleClose: () => void;
    acceptStudent: () => void;
    rejectStudent: () => void;
}

const ModalAcceptation: FunctionComponent<ModalAcceptationProps> = ({ displayAcceptModal, handleClose, acceptStudent, rejectStudent }) => {
	const { t } = useTranslation()

	return <Modal open={displayAcceptModal} handleClose={handleClose} >
		<DialogTitle id="alert-dialog-title">{t('common.studentEntry')}</DialogTitle>
		<DialogContent>
			<DialogContentText id="alert-dialog-description">
				{ t('common.join') }
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<SimpleButton onClick={rejectStudent} text={t('common.reject')} size='small' />
			<SimpleButton onClick={acceptStudent} text={t('common.accept')} size='small' />
		</DialogActions>
	</Modal>
}

export default ModalAcceptation
