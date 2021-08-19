import {FunctionComponent} from "react";
import TeachersCreateFormTitle
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormTitle";
import teachersCreateTextStyle from "@/modules/Teachers/Forms/Creation/styles/teachersCreateTextStyle.module.scss";

interface TeachersCreateFormProps {

}

const TeachersCreateForm: FunctionComponent<TeachersCreateFormProps> = () => {
	return <div className={teachersCreateTextStyle['teachers-create__text__title']}>
		<TeachersCreateFormTitle />
	</div>
}

export default TeachersCreateForm
