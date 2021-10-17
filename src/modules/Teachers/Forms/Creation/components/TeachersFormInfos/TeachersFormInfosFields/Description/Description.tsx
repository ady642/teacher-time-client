import { FunctionComponent } from "react";
import TeacherCreationForm
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/models/TeacherCreationForm";
import useObject from "@/common/hooks/useObject";
import DescriptionIntegration
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Description/DescriptionIntegration";

interface DescriptionProps {
	teacherCreationForm: TeacherCreationForm;
    setTeacherCreationForm: (teacherCreationForm: TeacherCreationForm) => void
}

const Description: FunctionComponent<DescriptionProps> = ({ setTeacherCreationForm, teacherCreationForm }) => {
	const { setObject } = useObject()

	const setDescription = (value: string) => {
		setObject('description', value, teacherCreationForm, setTeacherCreationForm)
	}

	return <DescriptionIntegration
		description={teacherCreationForm.description}
		setDescription={setDescription}
	/>
}

export default Description
