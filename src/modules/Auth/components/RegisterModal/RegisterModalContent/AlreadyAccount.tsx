import {FunctionComponent} from "react";

interface AlreadyAccountProps {
    onConnectClick: () => void
}

const AlreadyAccount: FunctionComponent<AlreadyAccountProps> = ({ onConnectClick }) => {
	return <p className={'test-sm my-4'}>
        Déjà enregistré ? <span onClick={() => onConnectClick()} className={'ml-2 text-orange font-bold cursor-pointer'}>Se connecter</span>
	</p>
}

export default AlreadyAccount
