import {FunctionComponent, useEffect, useState} from "react";
import useObject from "@/common/hooks/useObject";
import TeacherCreationForm
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/models/TeacherCreationForm";
import LevelSelectionIntegration
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Level/LevelSelectionIntegration";

interface LevelSelectionProps {
	teacherCreationForm: TeacherCreationForm;
	setTeacherCreationForm: (teacherCreationForm: TeacherCreationForm) => void
}

export enum Levels {
	PRIMAIRE = 'primaire',
	COLLEGE = 'college',
	LYCEE = 'lycee',
	SUPERIEUR = 'superieur'
}

const LevelSelection: FunctionComponent<LevelSelectionProps> = ({ teacherCreationForm, setTeacherCreationForm}) => {
	const [selectedLevels, setSelectedLevels] = useState<Set<string>>(() => new Set(teacherCreationForm.levels));
	const { setObject } = useObject()

	useEffect(() =>{
		setObject('levels', selectedLevels, teacherCreationForm, setTeacherCreationForm)
	}, [selectedLevels])

	return <LevelSelectionIntegration
		selectedLevels={selectedLevels}
		setSelectedLevels={setSelectedLevels}
	/>
}

export default LevelSelection
