import React, {FunctionComponent} from "react";
import Modal, {ModalProps} from "@/common/components/Modals/Modal";
import {Switch, Case} from "react-switch-case-module";
import DescriptionModification
	from "@/modules/User/components/ProfileContent/ProfileContentEditionModal/DescriptionModification";
import useTeacherClient from "@/modules/Teachers/services/useTeacherClient";
import useUserGetters from "@/context/user/helpers/useUserGetters";

interface ProfileContentEditionModalProps extends Pick<ModalProps, 'open' | 'handleClose'> {
	fieldToModify: string
}

const ProfileContentEditionModal: FunctionComponent<ProfileContentEditionModalProps> = ({ open, handleClose, fieldToModify }) => {
	const { modifyTeacher, submitStatus } = useTeacherClient()
	const { teacher } = useUserGetters()


	return <Modal open={open} handleClose={handleClose}>
		<div className={'p-6'}>
			<Switch componentName={fieldToModify} defaultComponent={<div>Default</div>}>
				<Case value="description">
					<DescriptionModification
						teacher={teacher}
						submitStatus={submitStatus}
						modifyDescription={modifyTeacher}
					/>
				</Case>
				<Case value="levels">
					<div>
						other component
					</div>
				</Case>
			</Switch>
		</div>
	</Modal>
}

export default ProfileContentEditionModal
