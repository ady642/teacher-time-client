import {FunctionComponent} from "react";
import teachersCreateFormStyle from "@/modules/Teachers/Forms/Creation/styles/teachersCreateFormStyle.module.scss";

interface TeachersCreateFormTitleProps {

}

const TeachersCreateFormTitle: FunctionComponent<TeachersCreateFormTitleProps> = () => {
	return <h2 className={teachersCreateFormStyle['teachers-create__form__title']}>
        Créer votre compte
	</h2>
}

export default TeachersCreateFormTitle
