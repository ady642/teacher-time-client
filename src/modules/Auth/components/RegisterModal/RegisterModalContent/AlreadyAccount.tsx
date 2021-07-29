import {FunctionComponent} from "react";
import QuestionAnswer from "@/modules/Auth/components/Texts/QuestionAnswer";

interface AlreadyAccountProps {
    onConnectClick: () => void
}

const AlreadyAccount: FunctionComponent<AlreadyAccountProps> = ({ onConnectClick }) => {
	return <QuestionAnswer
		firstText={'Déjà enregistré ?'}
		secondText={'Se connecter'}
		onTextClick={onConnectClick}
	/>
}

export default AlreadyAccount
