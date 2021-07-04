import React, {FunctionComponent} from "react";
import RegisterButton from "@/modules/home/components/RegisterButton";
import useTranslation from "@/common/hooks/useTranslation";
import styles from "@/modules/home/styles/Home.module.scss"

const TextEnd: FunctionComponent = () => {
	const { t } = useTranslation()

	return <section className={`flex md:px-12 px-6 flex-col items-center justify-center bg-gray-800 text-yellow-300 sm:mt-20 sm:pb-0 pb-10 md:h-96 h-72 ${styles.headBand__textEnd}`}>
		<span className={'md:text-4xl text-xl text-center'}>{ t('titreEnd') }</span>
		<span className={'md:text-2xl text-lg text-center sm:mt-1 mt-0 text-yellow-200'}>{ t('titreEndSubtitle') }</span>
		<span className={'md:text-2xl text-md text-white sm:mt-8 mt-4 text-center'}>{ t('textEnd') }</span>
		<RegisterButton text={t('register')}/>
	</section>
}

export default TextEnd
