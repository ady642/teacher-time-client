import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";

interface AboutCardProps {

}

const AboutCard: FunctionComponent<AboutCardProps> = () => {
	const { t } = useTranslation()

	return <aside>
		<h2 className={'uppercase font-bold sm:text-l text-xs mb-3'}>{ t('aboutTitle')}</h2>
		<p className='text-gray-400'>{ t('description') }</p>
	</aside>
}

export default AboutCard
