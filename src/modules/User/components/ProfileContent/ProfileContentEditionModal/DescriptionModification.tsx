import React, {FunctionComponent, useState} from "react";
import DescriptionIntegration
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Description/DescriptionIntegration";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import FieldTitle
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/FieldTitle";
import FieldSubtitle
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/FieldSubtitle";
import useTranslation from "@/common/hooks/useTranslation";
import SubmitButton from "@/modules/Auth/components/Buttons/SubmitButton";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";

interface DescriptionModificationProps {
	modifyDescription: (descriptionPayload: { description: string }) => void;
	submitStatus: string;
	teacher: Teacher
}

const DescriptionModification: FunctionComponent<DescriptionModificationProps> = ({ teacher, submitStatus, modifyDescription }) => {
	const [description, setDescription] = useState(teacher.description)

	const { t } = useTranslation()

	return <div className={'flex flex-col'}>
		<header>
			<FieldTitle title={t('teachers.form.creation.description.title')} />
			<FieldSubtitle subtitle={t('teachers.form.creation.description.subtitle')} />
		</header>
		<DescriptionIntegration
			description={description}
			setDescription={setDescription}
		/>
		<SubmitButton
			submitStatus={submitStatus}
			className="self-end mt-5"
			onClick={() => modifyDescription({ description })}
			label={'Modifier'}
		/>
	</div>
}

export default DescriptionModification
