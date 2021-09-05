import {ChangeEvent, FunctionComponent, useEffect, useRef} from "react";
import fieldSelectionStyles
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/styles/fieldSelection.module.scss";
import TeacherCreationForm
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/models/TeacherCreationForm";
import useObject from "@/common/hooks/useObject";

interface DescriptionProps {
	teacherCreationForm: TeacherCreationForm;
    setTeacherCreationForm: (teacherCreationForm: TeacherCreationForm) => void
}

const Description: FunctionComponent<DescriptionProps> = ({ setTeacherCreationForm, teacherCreationForm }) => {
	const textArea = useRef<HTMLTextAreaElement>(null)
	const { setObject } = useObject()

	const calcHeight = (scrollHeight: number): void => {
		textArea.current.style.height = `${scrollHeight}px`;
	}

	useEffect(() => {
		calcHeight(textArea.current.scrollHeight)
	}, [])

	const setDescription = (value: string) => {
		setObject('description', value, teacherCreationForm, setTeacherCreationForm)
	}

	const setHeightAndDescription = (target: { value: string, scrollHeight: number }) => {
		setDescription(target.value)
		calcHeight(target.scrollHeight);
	}

	return <textarea
		ref={textArea}
		className={fieldSelectionStyles['description']}
		value={teacherCreationForm.description}
		onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { setHeightAndDescription(e.target)}}
	/>
}

export default Description
