import {FunctionComponent} from "react";
import TailwindButton from "@/common/components/Buttons/TailwindButton";

interface NextButtonProps {
    onClick: () => void
}

const NextButton: FunctionComponent<NextButtonProps> = ({ onClick }) => {
	return <TailwindButton onClick={onClick}>Suivant</TailwindButton>
}

export default NextButton
