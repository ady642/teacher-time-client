import {FunctionComponent} from "react";
import TailwindButton from "@/common/components/Buttons/TailwindButton";

interface TeachersFormInfosFieldsButtonProps {
    nextStep: () => void;
    previousStep: () => void
}

const TeachersFormInfosFieldsButton: FunctionComponent<TeachersFormInfosFieldsButtonProps> = ({ nextStep, previousStep }) => {
	return <div>
		<TailwindButton onClick={nextStep}>Suivant</TailwindButton>
		<TailwindButton onClick={previousStep}>Retour</TailwindButton>
	</div>
}

export default TeachersFormInfosFieldsButton
