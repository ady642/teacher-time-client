import React, {FunctionComponent} from "react";
import TeachersCreateFormTitle
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormTitle";
import TeachersCreateFormOAuth
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormOAuth";
import TeachersCreateFormClassic
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormClassic/TeachersCreateFormClassic";
import teachersCreateFormStyle from '@/modules/Teachers/Forms/Creation/styles/teachersCreateFormStyle.module.scss'
import TTDivider from "@/common/components/Dividers/Divider";


interface TeachersCreateFormProps {

}

const TeachersCreateForm: FunctionComponent<TeachersCreateFormProps> = () => {
	return <div className={teachersCreateFormStyle['teachers-create__form__container']}>
		<TeachersCreateFormTitle />
		<TeachersCreateFormOAuth />
		<TTDivider className={'self-center my-6'} text={'Ou'}/>
		<TeachersCreateFormClassic />
	</div>
}

export default TeachersCreateForm
