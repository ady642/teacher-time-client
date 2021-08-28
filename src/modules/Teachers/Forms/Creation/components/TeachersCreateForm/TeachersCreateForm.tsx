import React, {FunctionComponent, useState} from "react";
import TeachersCreateFormTitle
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormTitle";
import TeachersCreateFormOAuth
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormOAuth";
import TeachersCreateFormClassic
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormClassic/TeachersCreateFormClassic";
import teachersCreateFormStyle from '@/modules/Teachers/Forms/Creation/styles/teachersCreateFormStyle.module.scss'
import TTDivider from "@/common/components/Dividers/Divider";
import {RegisterModalContentProps} from "@/modules/Auth/components/RegisterModal/RegisterModalContent/RegisterModalContent";
import { Switch, Case } from "react-switch-case-module";
import TeachersConnectForm from "@/modules/Teachers/Forms/Creation/components/TeachersConnectForm/TeachersConnectForm";
import AlreadyAccount from "@/modules/Auth/components/RegisterModal/RegisterModalContent/AlreadyAccount";
import NoAccount from "@/modules/Auth/components/LoginModal/LoginModalContent/NoAccount";

export interface TeachersCreateFormProps extends Omit<RegisterModalContentProps, 'clickOnAlreadyExists' | 'refContent'> {}

const TeachersCreateForm: FunctionComponent<TeachersCreateFormProps> = (
	{ onGoogleButtonClick, registrationForm, setRegistrationForm, registrationStatus,submitRegistration, exceptions }) => {
	const [hasAccount, setHasAccount] = useState(false)

	return <div className={teachersCreateFormStyle['teachers-create__form__container']}>
		<TeachersCreateFormTitle />
		<TeachersCreateFormOAuth />
		<TTDivider className={'self-center my-6'} text={'Ou'}/>
		<Switch componentName={hasAccount ? 'TeachersConnect' : 'TeachersCreateForm'} defaultComponent={<div>Default Form</div>}>
			<Case value={'TeachersConnect'}>
				<>
					<TeachersConnectForm />
					<NoAccount onRegisterClick={() => setHasAccount(false)} />
				</>
			</Case>
			<Case value={'TeachersCreateForm'}>
				<div className={'flex flex-col'}>
					<TeachersCreateFormClassic
						registrationForm={registrationForm}
						setRegistrationForm={setRegistrationForm}
						registrationStatus={registrationStatus}
						submitRegistration={submitRegistration}
						exceptions={exceptions}
						onGoogleButtonClick={onGoogleButtonClick}
					/>
					<AlreadyAccount className={'self-center'} onConnectClick={() => setHasAccount(true)} />
				</div>
			</Case>
		</Switch>

	</div>
}

export default TeachersCreateForm
