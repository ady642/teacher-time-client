import React, {FunctionComponent, useEffect, useState} from "react";
import Modal, {ModalProps} from "@/common/components/Modals/Modal";
import {Switch, Case} from "react-switch-case-module";
import DescriptionModification
	from "@/modules/User/components/ProfileContent/ProfileContentEditionModal/DescriptionModification";
import useTeacherClient from "@/modules/Teachers/services/useTeacherClient";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import FieldsModification from "@/modules/User/components/ProfileContent/ProfileContentEditionModal/FieldsModification";
import FieldTitle
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/FieldTitle";
import FieldSubtitle
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/FieldSubtitle";
import useTranslation from "@/common/hooks/useTranslation";
import LevelsModification from "@/modules/User/components/ProfileContent/ProfileContentEditionModal/LevelsModification";
import HourlyRateModification
	from "@/modules/User/components/ProfileContent/ProfileContentEditionModal/HourlyRateModification";
import NameModification from "@/modules/User/components/ProfileContent/ProfileContentEditionModal/NameModification";
import useUserClient from "@/modules/User/services/useUserClient";

interface ProfileContentEditionModalProps extends Pick<ModalProps, 'open' | 'handleClose'> {
	fieldToModify: string
}

const ProfileContentEditionModal: FunctionComponent<ProfileContentEditionModalProps> = ({ open, handleClose, fieldToModify }) => {
	const { modifyTeacher, submitStatus } = useTeacherClient()
	const { modifyUser, submitStatus: submitUserStatus } = useUserClient()
	const { teacher } = useUserGetters()
	const [title, setTitle] = useState('teachers.form.creation.fields.title')
	const [subtitle, setSubtitle] = useState('teachers.form.creation.fields.subtitle')

	enum StepModification {
		FIELDS = 'fields',
		DESCRIPTION = 'description',
		LEVELS = 'levels',
		HOURLY_RATE = 'hourlyRate',
		NAME = 'name',
	}

	type stepMappingInterface = Record<'title' | 'subtitle', string>

	const stepMappingComponent: Record<string, stepMappingInterface> = {
		[StepModification.FIELDS]: {
			title: 'teachers.form.creation.fields.title',
			subtitle: 'teachers.form.creation.fields.subtitle'
		},
		[StepModification.DESCRIPTION]: {
			title: 'teachers.form.creation.description.title',
			subtitle: 'teachers.form.creation.description.subtitle'
		},
		[StepModification.LEVELS]: {
			title: 'teachers.form.creation.level.title',
			subtitle: 'teachers.form.creation.level.subtitle'
		},
		[StepModification.HOURLY_RATE]: {
			title: 'teachers.form.creation.hourlyRate.title',
			subtitle: 'teachers.form.creation.hourlyRate.subtitle'
		},
		[StepModification.NAME]: {
			title: 'profile.modification.name.title',
			subtitle: 'profile.modification.name.subtitle'
		}
	}

	useEffect(() => {
		if(!fieldToModify) {
			return
		}

		setTitle(stepMappingComponent[fieldToModify].title)
		setSubtitle(stepMappingComponent[fieldToModify].subtitle)
	}, [fieldToModify])

	const { t } = useTranslation()

	return <Modal open={open} handleClose={handleClose}>
		<div className={'p-6'}>
			<header>
				<FieldTitle title={t(title)} />
				<FieldSubtitle subtitle={t(subtitle)} />
			</header>
			<Switch componentName={fieldToModify} defaultComponent={<div>Default</div>}>
				<Case value="description">
					<DescriptionModification
						teacher={teacher}
						submitStatus={submitStatus}
						modifyDescription={modifyTeacher}
					/>
				</Case>
				<Case value="fields">
					<FieldsModification
						initFields={new Set(teacher.fields)}
						modifyFields={modifyTeacher}
						submitStatus={submitStatus}
					/>
				</Case>
				<Case value="levels">
					<LevelsModification
						initLevels={new Set(teacher.levels)}
						modifyLevels={modifyTeacher}
						submitStatus={submitStatus}
					/>
				</Case>
				<Case value="hourlyRate">
					<HourlyRateModification
						hourlyRateInit={teacher.hourlyRate}
						modifyHourlyRate={modifyTeacher}
						submitStatus={submitStatus}
					/>
				</Case>
				<Case value="name">
					<NameModification
						initFirstName={teacher.user.firstName}
						initLastName={teacher.user.lastName}
						modifyNames={modifyUser}
						submitStatus={submitUserStatus}
					/>
				</Case>
			</Switch>
		</div>
	</Modal>
}

export default ProfileContentEditionModal
