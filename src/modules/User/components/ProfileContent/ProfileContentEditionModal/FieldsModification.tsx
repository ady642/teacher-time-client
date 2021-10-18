import {FunctionComponent, useState} from "react";
import FieldSelectionIntegration
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/FieldSelection/FieldSelectionIntegration";

interface FieldsModificationProps {
    initFields: Set<string>;
}

const FieldsModification: FunctionComponent<FieldsModificationProps> = ({ initFields }) => {
	const [selectedFields, setSelectedFields] = useState<Set<string>>(() => initFields);

	return <FieldSelectionIntegration
		selectedFields={selectedFields}
		setSelectedFields={setSelectedFields}
	/>
}

export default FieldsModification
