import React, {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import styles from "@/modules/home/styles/Home.module.scss"
import {Case, Switch} from "react-switch-case-module";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import useRoutePush from "@/common/hooks/useRoutePush";
import AvailableSwitch from "@/modules/Teachers/List/components/AvailableSwitch";

interface TextEndProps {
	userConnected: boolean
}

const TextEnd: FunctionComponent<TextEndProps> = ({ userConnected }) => {
	const { t } = useTranslation()
	const { goTo } = useRoutePush()

	const goToGiveClasses = async () => {
		await goTo('fr','teachers/create')
	}

	return <section className={`flex md:px-12 px-6 flex-col items-center justify-center bg-gray-800 text-yellow-300 sm:mt-20 sm:pb-0 pb-10 md:h-96 h-72 ${styles.headBand__textEnd}`}>
		<span className={'md:text-4xl text-xl text-center'}>{ t('titreEnd') }</span>
		<span className={'md:text-2xl text-md text-white sm:mt-8 mt-4 text-center'}>{ t('textEnd') }</span>
		<Switch componentName={userConnected ? 'AvailableSwitch': 'RegisterButton'} defaultComponent={<div>Error</div>}>
			<Case value={'RegisterButton'}>
				<TailwindButton onClick={goToGiveClasses} className={'text-xl mt-8 px-6 py-2'}>Donner des cours</TailwindButton>
			</Case>
			<Case value={'AvailableSwitch'}>
				<div className={'text-white mt-4 text-lg border-2 border-solid border-white p-2 rounded-lg'}>
					<AvailableSwitch />
				</div>
			</Case>
		</Switch>
	</section>
}

export default TextEnd
