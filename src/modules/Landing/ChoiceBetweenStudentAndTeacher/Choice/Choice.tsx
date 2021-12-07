import React, {FunctionComponent} from "react";
import ChoiceImage from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/Choice/ChoiceImage";
import ChoiceTitle from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/Choice/ChoiceTitle";
import ChoiceButton from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/Choice/ChoiceButton";
import ChoiceSubtitle from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/Choice/ChoiceSubtitle";
import styles from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/Choice/choice.module.scss";

interface ChoiceProps {
    title: string,
    subtitle: string,
    imgSource: string,
	onButtonClick: () => void,
	outlinedButton?: boolean
}

const Choice: FunctionComponent<ChoiceProps> = ({
	imgSource, title, subtitle, onButtonClick, outlinedButton = false
}) => {
	return <div className={styles['choice']}>
		<ChoiceImage source={imgSource}/>
		<section className={styles['choice__titles']}>
			<ChoiceTitle title={title} />
			<ChoiceSubtitle subtitle={subtitle} />
		</section>
		<ChoiceButton
			outlined={outlinedButton}
			onClick={onButtonClick}
		/>
	</div>
}

export default Choice
