import {FunctionComponent, useEffect, useState} from "react";
import NextButton
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/TeachersFormInfosFieldsButtons/NextButton";
import PreviousButton
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/TeachersFormInfosFieldsButtons/PreviousButton";
import buttonsStyle
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/TeachersFormInfosFieldsButtons/styles/buttonsStyle.module.scss"
import FinishButton
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/TeachersFormInfosFieldsButtons/FinishButton";
import {Switch, Case} from "react-switch-case-module";

interface TeachersFormInfosFieldsButtonProps {
    step: number;
    nextStep: () => void;
    previousStep: () => void;
    submitCreation: () => void;
}

const TeachersFormInfosFieldsButtons: FunctionComponent<TeachersFormInfosFieldsButtonProps> = ({
	step,
	nextStep,
	previousStep,
	submitCreation
}) => {
	const [secondButtonName, setSecondButtonName] = useState('Next')

	useEffect(() => {
		const name = step > 3 ? 'Finish': 'Next'
		setSecondButtonName(name)
	}, [step])

	return <div className={buttonsStyle['stepper-button__container']}>
		<PreviousButton onClick={previousStep}/>
		<Switch componentName={secondButtonName} defaultComponent={<NextButton onClick={nextStep}/>}>
			<Case value={'Next'}>
				<NextButton onClick={nextStep}/>
			</Case>
			<Case value={'Finish'}>
				<FinishButton onClick={submitCreation}/>
			</Case>
		</Switch>
	</div>
}

export default TeachersFormInfosFieldsButtons
