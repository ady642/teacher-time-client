import {FunctionComponent} from "react";
import {EmailInputProps} from "@/modules/Auth/components/Inputs/EmailInput";
import TeachersCreateFormClassInput
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormClassic/Inputs/TeachersCreateFormClassInput";

interface TeachersCreateFormClassPasswordProps extends EmailInputProps{

}

const TeachersCreateFormClassPassword: FunctionComponent<TeachersCreateFormClassPasswordProps> = ({ value, setValue }) => {
	return <TeachersCreateFormClassInput type="password" setValue={setValue} value={value}/>
}

export default TeachersCreateFormClassPassword
