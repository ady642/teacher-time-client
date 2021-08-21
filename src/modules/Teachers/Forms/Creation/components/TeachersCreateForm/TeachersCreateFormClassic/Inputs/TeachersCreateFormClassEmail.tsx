import {FunctionComponent} from "react";
import {EmailInputProps} from "@/modules/Auth/components/Inputs/EmailInput";
import TeachersCreateFormClassInput
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormClassic/Inputs/TeachersCreateFormClassInput";

interface TeachersCreateFormClassEmailProps extends EmailInputProps{

}

const TeachersCreateFormClassEmail: FunctionComponent<TeachersCreateFormClassEmailProps> = ({ value, setValue }) => {
	return <TeachersCreateFormClassInput setValue={setValue} value={value}/>
}

export default TeachersCreateFormClassEmail
