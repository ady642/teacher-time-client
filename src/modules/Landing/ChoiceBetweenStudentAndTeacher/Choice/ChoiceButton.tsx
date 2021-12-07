import {FunctionComponent} from "react";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import useTranslation from "@/common/hooks/useTranslation";
import {ButtonProps} from "@/common/types/button";

interface ChoiceButtonProps extends ButtonProps {}

const ChoiceButton: FunctionComponent<ChoiceButtonProps> = ({ onClick, outlined }) => {
	const { t } = useTranslation()

	return <TailwindButton outlined={outlined} onClick={onClick}>
		{ t('landing.getStarted') }
	</TailwindButton>
}

export default ChoiceButton
