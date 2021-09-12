import {FunctionComponent} from "react";
import {EmailInputProps} from "@/modules/Auth/components/Inputs/EmailInput";
import TeachersCreateFormClassInput
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormClassic/Inputs/TeachersCreateFormClassInput";

interface TeachersCreateFormClassPasswordProps extends EmailInputProps{

}

const TeachersCreateFormClassPassword: FunctionComponent<TeachersCreateFormClassPasswordProps> = ({ value, setValue, exception }) => {
	return <TeachersCreateFormClassInput type="password" exception={exception} setValue={setValue} value={value} placeholder={'Mot de passe'}/>
}

export default TeachersCreateFormClassPassword
