import {FunctionComponent} from "react";
import teachersCreateTextStyle from "@/modules/Teachers/Forms/Creation/styles/teachersCreateTextStyle.module.scss";

interface TeachersCreateFormTitleProps {

}

const TeachersCreateFormTitle: FunctionComponent<TeachersCreateFormTitleProps> = () => {
	return <h2 className={teachersCreateTextStyle['teachers-create__text__title']}>
        Créer votre compte
	</h2>
}

export default TeachersCreateFormTitle
