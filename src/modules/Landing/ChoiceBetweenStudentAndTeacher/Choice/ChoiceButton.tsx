import {FunctionComponent} from "react";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import {ButtonProps} from "@/common/types/button";

interface ChoiceButtonProps extends ButtonProps {
	label: string
}

const ChoiceButton: FunctionComponent<ChoiceButtonProps> = ({ onClick, outlined, label }) => {
	return <TailwindButton outlined={outlined} onClick={onClick}>
		{ label }
	</TailwindButton>
}

export default ChoiceButton
