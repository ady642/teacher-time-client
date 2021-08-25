import {FunctionComponent, useEffect, useState} from "react";
import TeachersCreateForm from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateForm";
import TeachersCreateLayout from "@/modules/Teachers/Forms/Creation/layout/TeachersCreateLayout";
import TeachersCreateText from "@/modules/Teachers/Forms/Creation/components/TeachersCreateText/TeachersCreateText";
import useAuthServices from "@/modules/Auth/services/useAuthServices";
import RegistrationForm from "@/modules/Auth/models/RegistrationForm";
import TeachersConnectionFormValidator
	from "@/modules/Teachers/Forms/Creation/validator/TeachersConnectionFormValidator";

interface TeachersConnectionProps {

}

const TeachersConnection: FunctionComponent<TeachersConnectionProps> = () => {
	const { registrationStatus, submitRegister, submitAttempt } = useAuthServices()
	const [registrationForm, setRegistrationForm] = useState(new RegistrationForm())
	const [registrationValidator, setRegistrationValidator] = useState(new TeachersConnectionFormValidator(registrationForm))

	const register = async () => {
		try {
			await submitRegister(registrationForm, registrationValidator)
		} catch (e) {
			throw new Error(e)
		}
	}

	useEffect(() => {
		if(submitAttempt) {
			setRegistrationValidator(new TeachersConnectionFormValidator(registrationForm))
			registrationValidator.validate()
		}
	}, [registrationForm, submitAttempt])

	return <TeachersCreateLayout
		left={<TeachersCreateText />}
		right={
			<TeachersCreateForm
				registrationForm={registrationForm}
				setRegistrationForm={setRegistrationForm}
				exceptions={registrationValidator.exceptions}
				submitRegistration={() => register()}
				registrationStatus={registrationStatus}
			/>}
	/>
}

export default TeachersConnection
