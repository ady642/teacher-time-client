import {FunctionComponent} from "react";
import styles from '@/modules/Landing/ChoiceBetweenStudentAndTeacher/Choice/choice.module.scss'

interface ChoiceImagProps {
    source: string
}

const ChoiceImage: FunctionComponent<ChoiceImagProps> = ({ source }) => {
	return <img
		className={styles['choice__image']}
		src={source}
		alt={'choice-image'}
	/>
}

export default ChoiceImage
