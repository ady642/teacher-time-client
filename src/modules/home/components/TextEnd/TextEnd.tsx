import React, {FunctionComponent} from "react";
import RegisterButton from "@/modules/home/components/RegisterButton";
import useTranslation from "@/common/hooks/useTranslation";
import styles from "@/modules/home/styles/Home.module.scss"
import {Case, Switch} from "react-switch-case-module";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import useRoutePush from "@/common/hooks/useRoutePush";

interface TextEndProps {
	openRegisterModal: () => void;
	userConnected: boolean
}

const TextEnd: FunctionComponent<TextEndProps> = ({ openRegisterModal, userConnected }) => {
	const { t } = useTranslation()
	const { goTo } = useRoutePush()

	const goToCreateRoom = () => {
		goTo('fr','room/create')
	}

	return <section className={`flex md:px-12 px-6 flex-col items-center justify-center bg-gray-800 text-yellow-300 sm:mt-20 sm:pb-0 pb-10 md:h-96 h-72 ${styles.headBand__textEnd}`}>
		<span className={'md:text-4xl text-xl text-center'}>{ t('titreEnd') }</span>
		<span className={'md:text-2xl text-md text-white sm:mt-8 mt-4 text-center'}>{ t('textEnd') }</span>
		<Switch componentName={userConnected ? 'CreateRoomButton': 'RegisterButton'} defaultComponent={<div>Error</div>}>
			<Case value={'RegisterButton'}>
				<RegisterButton onClick={openRegisterModal} text={t('register')}/>
			</Case>
			<Case value={'CreateRoomButton'}>
				<TailwindButton onClick={goToCreateRoom} className={'text-xl mt-8 px-6 py-2'}>Créer sa room</TailwindButton>
			</Case>
		</Switch>
	</section>
}

export default TextEnd
