import {FunctionComponent} from "react";
import teachersCreateFormStyle from "@/modules/Teachers/Forms/Creation/styles/teachersCreateFormStyle.module.scss";
import useTranslation from "@/common/hooks/useTranslation";

interface TeachersCreateFormTitleProps {
	hasAccount: boolean
}

const TeachersCreateFormTitle: FunctionComponent<TeachersCreateFormTitleProps> = ({ hasAccount }) => {
	const { t } = useTranslation()

	return <h2 className={teachersCreateFormStyle['teachers-create__form__title']}>
		{ hasAccount ? t('teachers.form.creation.title.login') : t('teachers.form.creation.title.register') }
	</h2>
}

export default TeachersCreateFormTitle
