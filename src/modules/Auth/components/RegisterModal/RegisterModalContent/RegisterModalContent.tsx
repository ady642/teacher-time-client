import {FunctionComponent, useEffect} from 'react';
import GoogleButton from '@/modules/Auth/components/Buttons/GoogleButton';
import FacebookButton from '@/modules/Auth/components/Buttons/FacebookButton';
import AuthService from "@/modules/Auth/services/AuthService";
import useTranslation from "@/common/hooks/useTranslation";
import EmailInput from "@/modules/Auth/components/RegisterModal/RegisterModalContent/EmailInput";
import RegistrationForm from "@/modules/Auth/models/RegistrationForm";
import useObject from "@/common/hooks/useObject";
import PasswordInput from "@/modules/Auth/components/RegisterModal/RegisterModalContent/PasswordInput";
import RegistrationValidator from "@/modules/Auth/validators/RegistrationValidator";

interface RegisterModalContentProps {
	registrationForm: RegistrationForm;
	registrationValidator: RegistrationValidator;
	setRegistrationForm: (registrationForm: RegistrationForm) => void;
	setRegistrationValidator: (registrationValidator: RegistrationValidator) => void;
}

const RegisterModalContent: FunctionComponent<RegisterModalContentProps> = ({
	registrationForm, setRegistrationForm,
	registrationValidator, setRegistrationValidator
}) => {
	const authService = new AuthService('')
	const { t } = useTranslation()
	const { setObject } = useObject()

	const signIn = (provider: string) => {
		authService.signIn(provider)
	}

	const setEmail = (email: string) => {
		setObject('email', email, registrationForm, setRegistrationForm)
	}
	const setPassword = (password: string) => {
		setObject('password', password, registrationForm, setRegistrationForm)
	}

	useEffect(() => {
		setRegistrationValidator(new RegistrationValidator(registrationForm))
		console.log(registrationValidator.isEmailValid())
	}, [registrationForm])

	return (
		<div className="flex flex-col p-4 w-80">
			<div className="flex flex-col items-center mb-3">
				<EmailInput label={'E-mail'} value={registrationForm.email} setValue={setEmail} />
				<PasswordInput label={'Mot de passe'} value={registrationForm.password} setValue={setPassword} />
				<p className="my-4 text-gray-400 text-center">{ t('common.register') }</p>
			</div>
			<GoogleButton onClick={() => signIn('google')} />
			<div className="mt-3">
				<FacebookButton onClick={() => signIn('facebook')} />
			</div>
		</div>
	);
};

export default RegisterModalContent;
