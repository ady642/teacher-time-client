import {FunctionComponent, useEffect, useState} from "react";
import TeachersCreateForm from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateForm";
import TeachersCreateLayout from "@/modules/Teachers/Forms/Creation/layout/TeachersCreateLayout";
import TeachersCreateText from "@/modules/Teachers/Forms/Creation/components/TeachersCreateText/TeachersCreateText";
import useAuthServices from "@/modules/Auth/services/useAuthServices";
import RegistrationForm from "@/modules/Auth/models/RegistrationForm";
import TeachersConnectionFormValidator
	from "@/modules/Teachers/Forms/Creation/validator/TeachersConnectionFormValidator";

interface TeachersConnectionProps {
	toLogin: boolean
}

const TeachersConnection: FunctionComponent<TeachersConnectionProps> = ({ toLogin }) => {
	const { registrationStatus, submitRegister, loginWithGoogle } = useAuthServices()
	const [registrationForm, setRegistrationForm] = useState(new RegistrationForm())
	const [registrationValidator, setRegistrationValidator] = useState(new TeachersConnectionFormValidator(registrationForm))

	const register = async (e: any) => {
		e.preventDefault(); // remove refresh when click on submit button
		try {
			await submitRegister(registrationForm, registrationValidator)
		} catch (e) {
			console.warn('this user already has a registration')
		}
	}

	useEffect(() => {
		setRegistrationValidator(new TeachersConnectionFormValidator(registrationForm))
		registrationValidator.validate()
	}, [registrationForm])

	return <TeachersCreateLayout
		left={<TeachersCreateText />}
		right={<TeachersCreateForm
			toLogin={toLogin}
			registrationForm={registrationForm}
			setRegistrationForm={setRegistrationForm}
			exceptions={registrationValidator.exceptions}
			submitRegistration={register}
			registrationStatus={registrationStatus}
			onGoogleButtonClick={loginWithGoogle}
		/>}
	/>
}

export default TeachersConnection
