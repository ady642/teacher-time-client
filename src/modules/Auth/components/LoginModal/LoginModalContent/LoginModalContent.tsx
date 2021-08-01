import { FunctionComponent } from 'react';
import GoogleButton from '@/modules/Auth/components/Buttons/GoogleButton';
import FacebookButton from '@/modules/Auth/components/Buttons/FacebookButton';
import useTranslation from "@/common/hooks/useTranslation";
import LoginEmailInput from "@/modules/Auth/components/LoginModal/LoginModalContent/LoginEmailInput";
import LoginPasswordInput from "@/modules/Auth/components/LoginModal/LoginModalContent/LoginPasswordInput";
import LoginForm from "@/modules/Auth/models/LoginForm";
import useObject from "@/common/hooks/useObject";
import LoginButton from "@/modules/Auth/components/LoginModal/LoginModalContent/LoginButton";
import styles from '@/modules/Auth/components/RegisterModal/registerModal.module.scss'
import TTDivider from "@/common/components/Dividers/Divider";
import NoAccount from "@/modules/Auth/components/LoginModal/LoginModalContent/NoAccount";

interface LoginModalContentProps {
	loginForm: LoginForm;
	setLoginForm: (loginForm: LoginForm) => void;
	exceptions: Map<string, string>;
	submitLogin: () => void;
	loginStatus: string;
	clickOnNoAccount: () => void
}

const LoginModalContent: FunctionComponent<LoginModalContentProps> = ({
	loginForm,
	exceptions,
	setLoginForm,
	submitLogin,
	loginStatus,
	clickOnNoAccount
}) => {
	const { t } = useTranslation()

	const { setObject } = useObject()

	const setEmail = (email: string) => {
		setObject('email', email, loginForm, setLoginForm)
	}
	const setPassword = (password: string) => {
		setObject('password', password, loginForm, setLoginForm)
	}

	return (
		<div className={`flex flex-col p-4 ${styles.authModalContent}`}>
			<p className="my-4 font-bold text-xl text-center">{ t('common.login') }</p>
			<form className="flex flex-col items-center px-16 w-full mt-5">
				<LoginEmailInput
					exception={exceptions.get('email')}
					className={'mb-6'}
					label={'E-mail'}
					value={loginForm.email} setValue={setEmail}
				/>
				<LoginPasswordInput
					className={'mb-6'}
					label={'Mot de passe'}
					value={loginForm.password} setValue={setPassword}
				/>
				<LoginButton loginStatus={loginStatus} onClick={() => { submitLogin() }} />
				<NoAccount onRegisterClick={clickOnNoAccount} />
				<TTDivider text="ou"/>
			</form>
			<section className="my-4 px-16 w-full">
				<GoogleButton onClick={() => console.log('google')} />
			</section>
		</div>
	);
};

export default LoginModalContent;
