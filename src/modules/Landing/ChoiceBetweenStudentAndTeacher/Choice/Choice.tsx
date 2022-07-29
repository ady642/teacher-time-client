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
	buttonSlot?: JSX.Element,
	buttonLabel: string
}

const Choice: FunctionComponent<ChoiceProps> = ({
	imgSource,
	title,
	subtitle,
	onButtonClick,
	outlinedButton = false,
	buttonSlot,
	buttonLabel
}) => {
	return <div className={styles['choice']}>
		<ChoiceTitle title={title} />
		<ChoiceImage source={imgSource}/>
		<ChoiceSubtitle subtitle={subtitle} />
		<div className={styles['choice__buttons']}>
			<Switch
				defaultComponent={
					<ChoiceButton
						outlined={outlinedButton}
						onClick={onButtonClick}
						label={buttonLabel}
					/>
				}
				componentName={buttonSlot ? 'withSlot': 'withoutSlot'}
			>
				<Case value={'withSlot'}>
					<div className={styles['choice__buttons']}>
						<ChoiceButton
							outlined={outlinedButton}
							onClick={onButtonClick}
							label={buttonLabel}
						/>
						{buttonSlot}
					</div>
				</Case>
				<Case value={'withoutSlot'}>
					<ChoiceButton
						outlined={outlinedButton}
						onClick={onButtonClick}
						label={buttonLabel}
					/>
				</Case>
			</Switch>
		</div>
	</div>
}

export default Choice
