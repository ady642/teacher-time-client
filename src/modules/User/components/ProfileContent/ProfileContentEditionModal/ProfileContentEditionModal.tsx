import React, {FunctionComponent} from "react";
import Modal, {ModalProps} from "@/common/components/Modals/Modal";
import {Switch, Case} from "react-switch-case-module";
import DescriptionModification
	from "@/modules/User/components/ProfileContent/ProfileContentEditionModal/DescriptionModification";

interface ProfileContentEditionModalProps extends Pick<ModalProps, 'open' | 'handleClose'> {
	fieldToModify: string
}

const ProfileContentEditionModal: FunctionComponent<ProfileContentEditionModalProps> = ({ open, handleClose, fieldToModify }) => {
	return <Modal open={open} handleClose={handleClose}>
		<Switch componentName={fieldToModify} defaultComponent={<div>Default</div>}>
			<Case value="description">
				<DescriptionModification />
			</Case>
			<Case value="description">
				<DescriptionModification />
			</Case>
		</Switch>
	</Modal>
}

export default ProfileContentEditionModal
