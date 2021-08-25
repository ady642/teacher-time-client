import React, {FunctionComponent} from "react";
import TeachersCreateFormTitle
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormTitle";
import TeachersCreateFormOAuth
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormOAuth";
import TeachersCreateFormClassic
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormClassic/TeachersCreateFormClassic";
import teachersCreateFormStyle from '@/modules/Teachers/Forms/Creation/styles/teachersCreateFormStyle.module.scss'
import TTDivider from "@/common/components/Dividers/Divider";
import {RegisterModalContentProps} from "@/modules/Auth/components/RegisterModal/RegisterModalContent/RegisterModalContent";

export interface TeachersCreateFormProps extends Omit<RegisterModalContentProps, 'clickOnAlreadyExists' | 'refContent'> {}

const TeachersCreateForm: FunctionComponent<TeachersCreateFormProps> = (
	{ registrationForm, setRegistrationForm, registrationStatus,submitRegistration, exceptions }) => {
	return <div className={teachersCreateFormStyle['teachers-create__form__container']}>
		<TeachersCreateFormTitle />
		<TeachersCreateFormOAuth />
		<TTDivider className={'self-center my-6'} text={'Ou'}/>
		<TeachersCreateFormClassic
			registrationForm={registrationForm}
			setRegistrationForm={setRegistrationForm}
			registrationStatus={registrationStatus}
			submitRegistration={submitRegistration}
			exceptions={exceptions}
		/>
	</div>
}

export default TeachersCreateForm
