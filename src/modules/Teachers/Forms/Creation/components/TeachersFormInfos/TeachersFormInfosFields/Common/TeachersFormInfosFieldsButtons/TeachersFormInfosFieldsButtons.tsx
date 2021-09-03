import {FunctionComponent} from "react";
import NextButton
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/TeachersFormInfosFieldsButtons/NextButton";
import PreviousButton
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/TeachersFormInfosFieldsButtons/PreviousButton";

interface TeachersFormInfosFieldsButtonProps {
    nextStep: () => void;
    previousStep: () => void
}

const TeachersFormInfosFieldsButtons: FunctionComponent<TeachersFormInfosFieldsButtonProps> = ({ nextStep, previousStep }) => {
	return <div>
		<NextButton onClick={nextStep} />
		<PreviousButton onClick={previousStep} />
	</div>
}

export default TeachersFormInfosFieldsButtons
