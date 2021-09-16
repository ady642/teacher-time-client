import {FunctionComponent, useEffect, useState} from "react";
import TeachersCreateFormClassEmail
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormClassic/Inputs/TeachersCreateFormClassEmail";
import TeachersCreateFormClassPassword
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormClassic/Inputs/TeachersCreateFormClassPassword";
import useObject from "@/common/hooks/useObject";
import TeachersConnectFormButton
	from "@/modules/Teachers/Forms/Creation/components/TeachersConnectForm/TeachersConnectFormButton";
import LoginForm from "@/modules/Auth/models/LoginForm";
import useAuthServices from "@/modules/Auth/services/useAuthServices";
import LoginValidator from "@/modules/Auth/validators/LoginValidator";
import useTeacherClient from "@/modules/Teachers/services/useTeacherClient";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";
import TeacherClient from "@/modules/Teachers/services/TeacherClient";
import useUserReducers from "@/context/user/helpers/useUserReducers";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";

interface TeachersConnectFormProps {
}

const TeachersConnectForm: FunctionComponent<TeachersConnectFormProps> = () => {
	const { setObject } = useObject()

	const { loginStatus, submitLogin } = useAuthServices()

	const [loginForm, setLoginForm] = useState(new LoginForm())
	const [loginValidator, setLoginValidator] = useState(new LoginValidator(loginForm))

	const login = async (e: any) => {
		e.preventDefault(); // remove refresh when click on submit button
		try {
			await submitLogin(loginForm, loginValidator)
		} catch (e) {
			throw new Error(e)
		}
	}

	useEffect(() => {
		setLoginValidator(new LoginValidator(loginForm))
		loginValidator.validate()
	}, [loginForm])

	const setEmail = (email: string) => {
		setObject('email', email, loginForm, setLoginForm)
	}
	const setPassword = (password: string) => {
		setObject('password', password, loginForm, setLoginForm)
	}

	return <form>
		<TeachersCreateFormClassEmail exception={loginValidator.exceptions.get('email')} value={loginForm.email} setValue={setEmail}/>
		<TeachersCreateFormClassPassword exception={loginValidator.exceptions.get('password')} value={loginForm.password} setValue={setPassword} />
		<TeachersConnectFormButton loginStatus={loginStatus} onClick={(e) => login(e)} />
	</form>
}

export default TeachersConnectForm
