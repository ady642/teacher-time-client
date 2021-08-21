import {FunctionComponent} from "react";
import TeachersCreateFormClassEmail
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormClassic/Inputs/TeachersCreateFormClassEmail";
import TeachersCreateFormClassFirstName
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormClassic/Inputs/TeachersCreateFormClassFirstName";
import TeachersCreateFormClassLastName
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormClassic/Inputs/TeachersCreateFormClassLastName";
import TeachersCreateFormClassPassword
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormClassic/Inputs/TeachersCreateFormClassPassword";
import TeachersCreateFormClassButton
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormClassic/Buttons/TeachersCreateFormClassButton";
import {TeachersCreateFormProps} from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateForm";
import useObject from "@/common/hooks/useObject";

interface TeachersCreateFormClassicProps extends TeachersCreateFormProps{}

const TeachersCreateFormClassic: FunctionComponent<TeachersCreateFormClassicProps> = (
	{ registrationForm,setRegistrationForm,registrationStatus,submitRegistration }
) => {
	const { setObject } = useObject()

	const setEmail = (email: string) => {
		setObject('email', email, registrationForm, setRegistrationForm)
	}
	const setPassword = (password: string) => {
		setObject('password', password, registrationForm, setRegistrationForm)
	}
	const setConfirmationPassword = (confirmationPassword: string) => {
		setObject('confirmationPassword', confirmationPassword, registrationForm, setRegistrationForm)
	}

	return <form>
		<TeachersCreateFormClassFirstName value={'Adrien'} setValue={() => console.log('set email')} />
		<TeachersCreateFormClassLastName value={'HM'} setValue={() => console.log('set last name')} />
		<TeachersCreateFormClassEmail value={registrationForm.email}  setValue={setEmail}/>
		<TeachersCreateFormClassPassword value={registrationForm.password} setValue={setPassword} />
		<TeachersCreateFormClassButton registrationStatus={registrationStatus} onClick={submitRegistration} />
	</form>
}

export default TeachersCreateFormClassic
