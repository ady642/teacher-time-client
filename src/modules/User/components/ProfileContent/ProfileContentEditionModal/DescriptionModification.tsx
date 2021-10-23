import React, {FunctionComponent, useState} from "react";
import DescriptionIntegration
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Description/DescriptionIntegration";
import SubmitButton from "@/modules/Auth/components/Buttons/SubmitButton";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";

interface DescriptionModificationProps {
	modifyDescription: (descriptionPayload: { description: string }) => void;
	submitStatus: string;
	teacher: Teacher
}

const DescriptionModification: FunctionComponent<DescriptionModificationProps> = ({ teacher, submitStatus, modifyDescription }) => {
	const [description, setDescription] = useState(teacher.description)

	return <div className={'flex flex-col'}>
		<DescriptionIntegration
			description={description}
			setDescription={setDescription}
		/>
		<SubmitButton
			submitStatus={submitStatus}
			className="self-end mt-5"
			onClick={() => modifyDescription({ description })}
			label={'Modifier la description'}
		/>
	</div>
}

export default DescriptionModification
