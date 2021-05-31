import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import InfoCards from "@/modules/Contact/components/InfoCards";

interface AboutCardProps {

}

const AboutText: FunctionComponent<AboutCardProps> = () => {
	const { t } = useTranslation()

	return <aside className={'lg:w-1/3 w-full'}>
		<h2 className={'font-bold sm:text-3xl letter-spacing text-xl mb-5 capitalize'}>
			{ t('aboutTitle')}
		</h2>
		<div className={'text-gray-700'}>
			<p className='mb-8 text-xl flex flex-col flex-nowrap'>
				<span>Teacher-time est une plate-forme gratuite mise à la disposition de tous</span>
				<span>les enseignants ou étudiants pour :</span>
			</p>
			<div className={'flex flex-col text-xl mb-8 text-black'}>
				<span className={'mb-3'}>
					{ t('privateClass') }
				</span>
				<span>
					{ t('classRoom') }
				</span>
			</div>
		</div>
		<InfoCards />
	</aside>
}

export default AboutText
