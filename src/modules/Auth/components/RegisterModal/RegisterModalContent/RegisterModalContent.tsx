import {FunctionComponent, MutableRefObject} from 'react';
import GoogleButton from '@/modules/Auth/components/Buttons/GoogleButton';
import useTranslation from "@/common/hooks/useTranslation";
import RegistrationForm from "@/modules/Auth/models/RegistrationForm";
import useObject from "@/common/hooks/useObject";
import ConfirmationPasswordInput
	from "@/modules/Auth/components/RegisterModal/RegisterModalContent/ConfirmationPasswordInput";
import styles from '@/modules/Auth/components/RegisterModal/registerModal.module.scss'
import RegisterButton from "@/modules/Auth/components/RegisterModal/RegisterModalContent/RegisterButton";
import AlreadyAccount from "@/modules/Auth/components/RegisterModal/RegisterModalContent/AlreadyAccount";
import TTDivider from "@/common/components/Dividers/Divider";
import ErrorMessage from "@/common/components/Errors/ErrorMessage";
import RegisterEmailInput from "@/modules/Auth/components/RegisterModal/RegisterModalContent/RegisterEmailInput";
import RegisterPasswordInput from "@/modules/Auth/components/RegisterModal/RegisterModalContent/RegisterPasswordInput";
import RegisterFirstNameInput
	from "@/modules/Auth/components/RegisterModal/RegisterModalContent/RegisterFirstNameInput";
import RegisterLastNameInput from "@/modules/Auth/components/RegisterModal/RegisterModalContent/RegisterLastNameInput";

export interface RegisterModalContentProps {
	registrationForm: RegistrationForm;
	setRegistrationForm: (registrationForm: RegistrationForm) => void;
	refContent: MutableRefObject<HTMLDivElement>;
	exceptions: Map<string, string>;
	submitRegistration: (e?: Event) => void;
	registrationStatus: string;
	clickOnAlreadyExists: () => void;
	onGoogleButtonClick: () => void;
}

const RegisterModalContent: FunctionComponent<RegisterModalContentProps> = ({
	registrationForm, setRegistrationForm,
	refContent,
	submitRegistration,
	exceptions,
	registrationStatus,
	clickOnAlreadyExists,
	onGoogleButtonClick
}) => {
	const { t } = useTranslation()
	const { setObject } = useObject()

	const setFirstName = (firstName: string) => {
		setObject('firstName', firstName, registrationForm, setRegistrationForm)
	}
	const setLastName = (lastName: string) => {
		setObject('lastName', lastName, registrationForm, setRegistrationForm)
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
		<div ref={refContent} className={`flex flex-col p-4 bg-white ${styles.authModalContent}`}>
			<p className="my-4 font-bold text-xl text-center">{ t('common.register') }</p>
			<form className="flex flex-col items-center w-full px-16 mt-5">
				<RegisterFirstNameInput
					exception={exceptions.get('firstName')}
					className={'mb-6'}
					value={registrationForm.firstName} setValue={setFirstName}
				/>
				<RegisterLastNameInput
					exception={exceptions.get('lastName')}
					className={'mb-6'}
					value={registrationForm.lastName} setValue={setLastName}
				/>
				<RegisterEmailInput
					exception={exceptions.get('email')}
					className={'mb-6'}
					value={registrationForm.email} setValue={setEmail}
				/>
				<RegisterPasswordInput
					exception={exceptions.get('password')}
					className={'mb-6'}
					value={registrationForm.password} setValue={setPassword}
				/>
				<ConfirmationPasswordInput
					exception={exceptions.get('confirmationPassword')}
					className={'mb-4'}
					label={'Confirmation'}
					value={registrationForm.confirmationPassword} setValue={setConfirmationPassword}
				/>
				<div className={'flex flex-col items-center'} style={{ minHeight: 32 }}>
					{ registrationStatus === 'ERROR' ? <ErrorMessage className={'text-lg'} exception={'Cet utilisateur existe déjà'} /> : <div /> }
					<RegisterButton
						onClick={() => { submitRegistration() }}
						registrationStatus={registrationStatus}
					/>
				</div>
				<AlreadyAccount onConnectClick={clickOnAlreadyExists} />
				<TTDivider text="ou"/>
			</form>
			<section className="my-4 px-16 w-full">
				<GoogleButton onClick={onGoogleButtonClick} />
			</section>
		</div>
	);
};

export default RegisterModalContent;
