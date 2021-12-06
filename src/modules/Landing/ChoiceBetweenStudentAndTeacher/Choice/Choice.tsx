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
	onButtonClick: () => void
}

const Choice: FunctionComponent<ChoiceProps> = ({
	imgSource, title, subtitle, onButtonClick
}) => {
	return <div className={styles['choice']}>
		<ChoiceImage source={imgSource}/>
		<section className={styles['choice__titles']}>
			<ChoiceTitle title={title} />
			<ChoiceSubtitle subtitle={subtitle} />
		</section>
		<ChoiceButton onClick={onButtonClick} />
	</div>
}

export default Choice
