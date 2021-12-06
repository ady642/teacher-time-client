import {FunctionComponent} from "react";
import styles from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/Choice/choice.module.scss"

interface ChoiceSubtitleProps {
    subtitle: string
}

const ChoiceSubtitle: FunctionComponent<ChoiceSubtitleProps> = ({ subtitle }) => {
	return <h2 className={styles['choice__titles__sub']}>
		{ subtitle }
	</h2>
}

export default ChoiceSubtitle
