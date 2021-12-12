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
import ErrorMessage from "@/common/components/Errors/ErrorMessage";

interface TeachersCreateFormClassicProps extends Omit<TeachersCreateFormProps, 'toLogin'>{}

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
	const setFirstName = (firstName: string) => {
		setObject('firstName', firstName, registrationForm, setRegistrationForm)
	}
	const setLastName = (lastName: string) => {
		setObject('lastName', lastName, registrationForm, setRegistrationForm)
	}

	return <form className={'flex flex-col'}>
		<TeachersCreateFormClassFirstName value={registrationForm.firstName} setValue={setFirstName} />
		<TeachersCreateFormClassLastName value={registrationForm.lastName} setValue={setLastName} />
		<TeachersCreateFormClassEmail value={registrationForm.email}  setValue={setEmail}/>
		<TeachersCreateFormClassPassword value={registrationForm.password} setValue={setPassword} />
		<TeachersCreateFormClassPassword value={registrationForm.confirmationPassword} setValue={setConfirmationPassword} />
		{ registrationStatus === 'ERROR' ? <ErrorMessage className={'text-lg self-center'} exception={'Cet utilisateur existe déjà'} /> : <div /> }
		<TeachersCreateFormClassButton registrationStatus={registrationStatus} onClick={(e) => submitRegistration(e)} />
	</form>
}

export default TeachersCreateFormClassic
