import {FunctionComponent} from "react";
import TTInput from "@/common/components/Inputs/TTInput";
import TeacherCreationForm
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/models/TeacherCreationForm";
import useObject from "@/common/hooks/useObject";

interface HourlyRateInputProps {
    teacherCreationForm: TeacherCreationForm;
    setTeacherCreationForm: (teacherCreationForm: TeacherCreationForm) => void
}

const HourlyRateInput: FunctionComponent<HourlyRateInputProps> = ({ teacherCreationForm, setTeacherCreationForm }) => {
	const { setObject } = useObject()

	const setHourlyRate = (hourlyRate: number) => {
		setObject('hourlyRate', hourlyRate, teacherCreationForm, setTeacherCreationForm)
	}

	return <TTInput type={'number'} value={teacherCreationForm.hourlyRate} setValue={setHourlyRate} />
}

export default HourlyRateInput
