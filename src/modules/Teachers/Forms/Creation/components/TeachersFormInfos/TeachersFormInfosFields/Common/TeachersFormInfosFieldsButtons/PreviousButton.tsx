import {FunctionComponent} from "react";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import buttonsStyle
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/TeachersFormInfosFieldsButtons/styles/buttonsStyle.module.scss";

interface PreviousButtonProps {
    onClick: () => void
}

const PreviousButton: FunctionComponent<PreviousButtonProps> = ({ onClick }) => {
	return <TailwindButton
		className={`${buttonsStyle['stepper-button__previous']} ${buttonsStyle['stepper-button']}`}
		onClick={onClick}
	>
        Retour
	</TailwindButton>
}

export default PreviousButton
