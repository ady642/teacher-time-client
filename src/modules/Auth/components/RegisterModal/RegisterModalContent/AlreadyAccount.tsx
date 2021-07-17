import {FunctionComponent} from "react";

interface AlreadyAccountProps {
    onConnectClick: () => void
}

const AlreadyAccount: FunctionComponent<AlreadyAccountProps> = ({ onConnectClick }) => {
	return <p className={'text-sm my-4'}>
		<span>Déjà enregistré ?</span> <span onClick={() => onConnectClick()} className={'ml-2 text-orange font-bold cursor-pointer hover:text-red-600'}>Se connecter</span>
	</p>
}

export default AlreadyAccount
