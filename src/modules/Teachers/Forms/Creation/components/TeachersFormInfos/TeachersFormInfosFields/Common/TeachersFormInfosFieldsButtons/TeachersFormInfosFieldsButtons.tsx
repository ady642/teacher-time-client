import {FunctionComponent} from "react";
import NextButton
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/TeachersFormInfosFieldsButtons/NextButton";
import PreviousButton
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/TeachersFormInfosFieldsButtons/PreviousButton";
import buttonsStyle from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/TeachersFormInfosFieldsButtons/styles/buttonsStyle.module.scss"

interface TeachersFormInfosFieldsButtonProps {
    nextStep: () => void;
    previousStep: () => void
}

const TeachersFormInfosFieldsButtons: FunctionComponent<TeachersFormInfosFieldsButtonProps> = ({ nextStep, previousStep }) => {
	return <div className={buttonsStyle['stepper-button__container']}>
		<PreviousButton onClick={previousStep} />
		<NextButton onClick={nextStep} />
	</div>
}

export default TeachersFormInfosFieldsButtons
