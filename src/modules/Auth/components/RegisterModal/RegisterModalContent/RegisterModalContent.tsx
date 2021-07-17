import {FunctionComponent, MutableRefObject, useEffect} from 'react';
import GoogleButton from '@/modules/Auth/components/Buttons/GoogleButton';
import FacebookButton from '@/modules/Auth/components/Buttons/FacebookButton';
import AuthService from "@/modules/Auth/services/AuthService";
import useTranslation from "@/common/hooks/useTranslation";
import EmailInput from "@/modules/Auth/components/RegisterModal/RegisterModalContent/EmailInput";
import RegistrationForm from "@/modules/Auth/models/RegistrationForm";
import useObject from "@/common/hooks/useObject";
import PasswordInput from "@/modules/Auth/components/RegisterModal/RegisterModalContent/PasswordInput";
import RegistrationValidator from "@/modules/Auth/validators/RegistrationValidator";
import ConfirmationPasswordInput
	from "@/modules/Auth/components/RegisterModal/RegisterModalContent/ConfirmationPasswordInput";
import styles from '@/modules/Auth/components/RegisterModal/registerModal.module.scss'
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import RegisterButton from "@/modules/Auth/components/RegisterModal/RegisterModalContent/RegisterButton";
import {Divider} from "@material-ui/core";
import AlreadyAccount from "@/modules/Auth/components/RegisterModal/RegisterModalContent/AlreadyAccount";
import TTDivider from "@/common/components/Dividers/Divider";

interface RegisterModalContentProps {
	registrationForm: RegistrationForm;
	registrationValidator: RegistrationValidator;
	setRegistrationForm: (registrationForm: RegistrationForm) => void;
	setRegistrationValidator: (registrationValidator: RegistrationValidator) => void;
	refContent: MutableRefObject<HTMLDivElement>
}

const RegisterModalContent: FunctionComponent<RegisterModalContentProps> = ({
	registrationForm, setRegistrationForm,
	registrationValidator, setRegistrationValidator,
	refContent
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
	const setConfirmationPassword = (confirmationPassword: string) => {
		setObject('confirmationPassword', confirmationPassword, registrationForm, setRegistrationForm)
	}

	useEffect(() => {
		setRegistrationValidator(new RegistrationValidator(registrationForm))
		console.log(registrationValidator.isEmailValid())
	}, [registrationForm])

	return (
		<div ref={refContent} className={`flex flex-col p-4 bg-white ${styles.registerModalContent}`}>
			<p className="my-4 font-bold text-xl text-center">{ t('common.register') }</p>
			<div className="flex flex-col items-center mb-3 w-full px-20 mt-5">
				<EmailInput label={'E-mail'} value={registrationForm.email} setValue={setEmail} />
				<PasswordInput className={'my-5'} label={'Mot de passe'} value={registrationForm.password} setValue={setPassword} />
				<ConfirmationPasswordInput label={'Confirmation'} value={registrationForm.confirmationPassword} setValue={setConfirmationPassword} />
				<RegisterButton className={'mt-6'} onClick={() => { console.log('je sign up') }} />
				<AlreadyAccount onConnectClick={() => console.log('open sign in modal')} />
				<TTDivider text="ou"/>
				<section className="mt-8 w-full">
					<GoogleButton onClick={() => signIn('google')} />
					<div className="mt-5">
						<FacebookButton onClick={() => signIn('facebook')} />
					</div>
				</section>
			</div>
		</div>
	);
};

export default RegisterModalContent;
