import {FunctionComponent} from "react";
import teachersCreateTextStyle from "@/modules/Teachers/Forms/Creation/styles/teachersCreateTextStyle.module.scss"

interface TeachersCreateTextTitleProps {

}

const TeachersCreateTextTitle: FunctionComponent<TeachersCreateTextTitleProps> = () => {
	return <h1 className={teachersCreateTextStyle['teachers-create__text__title']}>
		<span>Donner des cours,</span> <span>vivre de sa Passion !</span>
	</h1>
}

export default TeachersCreateTextTitle
