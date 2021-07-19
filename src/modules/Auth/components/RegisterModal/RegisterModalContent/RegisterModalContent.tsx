import {FunctionComponent, MutableRefObject, useEffect} from 'react';
import GoogleButton from '@/modules/Auth/components/Buttons/GoogleButton';
import FacebookButton from '@/modules/Auth/components/Buttons/FacebookButton';
import AuthService from "@/modules/Auth/services/AuthService";
import useTranslation from "@/common/hooks/useTranslation";
import EmailInput from "@/modules/Auth/components/RegisterModal/RegisterModalContent/EmailInput";
import RegistrationForm from "@/modules/Auth/models/RegistrationForm";
import useObject from "@/common/hooks/useObject";
import PasswordInput from "@/modules/Auth/components/RegisterModal/RegisterModalContent/PasswordInput";
import ConfirmationPasswordInput
	from "@/modules/Auth/components/RegisterModal/RegisterModalContent/ConfirmationPasswordInput";
import styles from '@/modules/Auth/components/RegisterModal/registerModal.module.scss'
import RegisterButton from "@/modules/Auth/components/RegisterModal/RegisterModalContent/RegisterButton";
import AlreadyAccount from "@/modules/Auth/components/RegisterModal/RegisterModalContent/AlreadyAccount";
import TTDivider from "@/common/components/Dividers/Divider";

interface RegisterModalContentProps {
	registrationForm: RegistrationForm;
	setRegistrationForm: (registrationForm: RegistrationForm) => void;
	refContent: MutableRefObject<HTMLDivElement>;
	exceptions: Map<string, string>;
	submitRegistration: () => void;
}

const RegisterModalContent: FunctionComponent<RegisterModalContentProps> = ({
	registrationForm, setRegistrationForm,
	refContent,
	submitRegistration,
	exceptions
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

	return (
		<div ref={refContent} className={`flex flex-col p-4 bg-white ${styles.registerModalContent}`}>
			<p className="my-4 font-bold text-xl text-center">{ t('common.register') }</p>
			<form className="flex flex-col items-center w-full px-16 mt-5">
				<EmailInput
					exception={exceptions.get('email')}
					className={'mb-6'}
					label={'E-mail'}
					value={registrationForm.email} setValue={setEmail}
				/>
				<PasswordInput
					exception={exceptions.get('password')}
					className={'mb-6'}
					label={'Mot de passe'}
					value={registrationForm.password} setValue={setPassword}
				/>
				<ConfirmationPasswordInput
					exception={exceptions.get('confirmationPassword')}
					className={'mb-4'}
					label={'Confirmation'}
					value={registrationForm.confirmationPassword} setValue={setConfirmationPassword}
				/>
				<RegisterButton className={'mt-6'} onClick={() => { submitRegistration() }} />
				<AlreadyAccount onConnectClick={() => console.log('open sign in modal')} />
				<TTDivider text="ou"/>
			</form>
			<section className="my-4 px-16 w-full">
				<GoogleButton onClick={() => signIn('google')} />
				<div className="mt-5">
					<FacebookButton onClick={() => signIn('facebook')} />
				</div>
			</section>
		</div>
	);
};

export default RegisterModalContent;
