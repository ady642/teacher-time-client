import {FunctionComponent} from "react";
import QuestionAnswer from "@/modules/Auth/components/Texts/QuestionAnswer";

interface AlreadyAccountProps {
    onConnectClick: () => void;
	className?: string;
}

const AlreadyAccount: FunctionComponent<AlreadyAccountProps> = ({ onConnectClick, className }) => {
	return <QuestionAnswer
		firstText={'Déjà enregistré ?'}
		secondText={'Se connecter'}
		onTextClick={onConnectClick}
		className={className}
	/>
}

export default AlreadyAccount
