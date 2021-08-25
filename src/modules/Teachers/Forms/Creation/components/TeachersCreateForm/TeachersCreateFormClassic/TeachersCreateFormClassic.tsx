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
	const setFirstName = (firstName: string) => {
		setObject('firstName', firstName, registrationForm, setRegistrationForm)
	}
	const setLastName = (lastName: string) => {
		setObject('lastName', lastName, registrationForm, setRegistrationForm)
	}

	return <form>
		<TeachersCreateFormClassFirstName value={registrationForm.firstName} setValue={setFirstName} />
		<TeachersCreateFormClassLastName value={registrationForm.lastName} setValue={setLastName} />
		<TeachersCreateFormClassEmail value={registrationForm.email}  setValue={setEmail}/>
		<TeachersCreateFormClassPassword value={registrationForm.password} setValue={setPassword} />
		<TeachersCreateFormClassButton registrationStatus={registrationStatus} onClick={submitRegistration} />
	</form>
}

export default TeachersCreateFormClassic
