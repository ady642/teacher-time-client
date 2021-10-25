import React, {FunctionComponent, useState} from "react";
import FieldSelectionIntegration
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/FieldSelection/FieldSelectionIntegration";
import SubmitButton from "@/modules/Auth/components/Buttons/SubmitButton";

interface FieldsModificationProps {
    initFields: Set<string>;
	submitStatus: string;
	modifyFields: (fieldsPayload: { fields: string[] }) => void;
}

const FieldsModification: FunctionComponent<FieldsModificationProps> = ({ initFields, submitStatus, modifyFields }) => {
	const [selectedFields, setSelectedFields] = useState<Set<string>>(() => initFields);

	return <div className={'flex flex-col'}>
		<FieldSelectionIntegration
			selectedFields={selectedFields}
			setSelectedFields={setSelectedFields}
		/>
		<SubmitButton
			submitStatus={submitStatus}
			className="w-full mt-5"
			onClick={() => modifyFields({ fields: [...selectedFields] })}
			label={'Modifier les matières'}
		/>
	</div>
}

export default FieldsModification
