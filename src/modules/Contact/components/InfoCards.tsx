import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import InfoCard from "@/modules/Contact/components/InfoCard";
import {Email, PhoneInTalk} from "@material-ui/icons";

interface InfoCardsProps {

}

const InfoCards: FunctionComponent<InfoCardsProps> = () => {
	const { t } = useTranslation()

	return <section className='flex p-8 w-full flex-wrap'>
		<InfoCard title={t('call')} text={`${t('mobile')}: +33 6 28 35 94 85`}>
			<div className={'text-blue-500'}>
				<PhoneInTalk color='inherit'/>
			</div>
		</InfoCard>
		<InfoCard title={t('writeToUs')} text='Email: webmaster@teacher-time.com' className={'sm:ml-6 sm:mt-0 mt-2 ml-0'}>
			<div className={'text-yellow-500'}>
				<Email />
			</div>
		</InfoCard>
	</section>
}

export default InfoCards
