import React, {FunctionComponent} from "react";
import ChoiceImage from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/Choice/ChoiceImage";
import ChoiceTitle from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/Choice/ChoiceTitle";
import ChoiceButton from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/Choice/ChoiceButton";
import ChoiceSubtitle from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/Choice/ChoiceSubtitle";
import styles from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/Choice/choice.module.scss";
import { Switch, Case } from 'react-switch-case-module'

interface ChoiceProps {
    title: string,
    subtitle: string,
    imgSource: string,
	onButtonClick: () => void,
	outlinedButton?: boolean,
	buttonSlot?: JSX.Element
}

const Choice: FunctionComponent<ChoiceProps> = ({
	imgSource, title, subtitle, onButtonClick, outlinedButton = false, buttonSlot
}) => {
	return <div className={styles['choice']}>
		<ChoiceImage source={imgSource}/>
		<section className={styles['choice__titles']}>
			<ChoiceTitle title={title} />
			<ChoiceSubtitle subtitle={subtitle} />
		</section>
		<Switch
			defaultComponent={
				<ChoiceButton
					outlined={outlinedButton}
					onClick={onButtonClick}
				/>
			}
			componentName={buttonSlot ? 'withSlot': 'withoutSlot'}
		>
			<Case value={'withSlot'}>
				<div className={styles['choice__buttons']}>
					<ChoiceButton
						outlined={outlinedButton}
						onClick={onButtonClick}
					/>
					{buttonSlot}
				</div>
			</Case>
			<Case value={'withoutSlot'}>
				<ChoiceButton
					outlined={outlinedButton}
					onClick={onButtonClick}
				/>
			</Case>
		</Switch>
	</div>
}

export default Choice
