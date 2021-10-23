import React, {FunctionComponent, useState} from "react";
import SubmitButton from "@/modules/Auth/components/Buttons/SubmitButton";
import LevelSelectionIntegration
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Level/LevelSelectionIntegration";

interface FieldsModificationProps {
	initLevels: Set<string>;
	submitStatus: string;
	modifyLevels: (levelsPayload: { levels: string[] }) => void;
}

const FieldsModification: FunctionComponent<FieldsModificationProps> = ({ initLevels, submitStatus, modifyLevels }) => {
	const [selectedLevels, setSelectedLevels] = useState<Set<string>>(() => initLevels);

	return <div className={'flex flex-col'}>
		<LevelSelectionIntegration
			selectedLevels={selectedLevels}
			setSelectedLevels={setSelectedLevels}
		/>
		<SubmitButton
			submitStatus={submitStatus}
			className="self-end mt-5"
			onClick={() => modifyLevels({ levels: [...selectedLevels] })}
			label={'Modifier les niveaux'}
		/>
	</div>
}

export default FieldsModification
