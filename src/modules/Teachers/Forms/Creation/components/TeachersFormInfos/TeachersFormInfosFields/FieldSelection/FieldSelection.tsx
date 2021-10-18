import {FunctionComponent, useEffect, useState} from "react";
import TeacherCreationForm
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/models/TeacherCreationForm";
import useObject from "@/common/hooks/useObject";
import FieldSelectionIntegration
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/FieldSelection/FieldSelectionIntegration";

interface FieldSelectionProps {
	setTeacherCreationForm: (teacherCreationForm: TeacherCreationForm) => void;
	teacherCreationForm: TeacherCreationForm
}

const FieldSelection: FunctionComponent<FieldSelectionProps> = ({ teacherCreationForm, setTeacherCreationForm }) => {
	const [selectedFields, setSelectedFields] = useState<Set<string>>(() => teacherCreationForm.fields);
	const { setObject } = useObject()

	useEffect(() =>{
		setObject('fields', selectedFields, teacherCreationForm, setTeacherCreationForm)
	}, [selectedFields])

	return <FieldSelectionIntegration
		selectedFields={selectedFields}
		setSelectedFields={setSelectedFields}
	/>
}

export default FieldSelection
