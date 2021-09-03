import {FunctionComponent} from "react";
import TailwindButton from "@/common/components/Buttons/TailwindButton";

interface PreviousButtonProps {
    onClick: () => void
}

const PreviousButton: FunctionComponent<PreviousButtonProps> = ({ onClick }) => {
	return <TailwindButton onClick={onClick}>Retour</TailwindButton>
}

export default PreviousButton
