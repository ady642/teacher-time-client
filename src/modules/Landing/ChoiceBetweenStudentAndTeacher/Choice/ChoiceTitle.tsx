import {FunctionComponent} from "react";
import styles from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/Choice/choice.module.scss";

interface ChoiceTitleProps {
    title: string
}

const ChoiceTitle: FunctionComponent<ChoiceTitleProps> = ({ title }) => {
	return <h1 className={styles['choice__titles__main']}>
		{ title }
	</h1>
}

export default ChoiceTitle
