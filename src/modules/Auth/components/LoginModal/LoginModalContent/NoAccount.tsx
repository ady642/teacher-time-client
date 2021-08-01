import {FunctionComponent} from "react";
import QuestionAnswer from "@/modules/Auth/components/Texts/QuestionAnswer";

interface NoAccountProps {
    onRegisterClick: () => void
}

const NoAccount: FunctionComponent<NoAccountProps> = ({ onRegisterClick }) => {
	return <QuestionAnswer
		firstText={'Pas encore enregistré ?'}
		secondText={'Créer un compte'}
		onTextClick={onRegisterClick}
	/>
}

export default NoAccount
