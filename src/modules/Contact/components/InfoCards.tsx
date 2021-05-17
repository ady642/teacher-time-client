import {FunctionComponent} from "react";
import InfoCard from "@/modules/Contact/components/InfoCard";
import {Mail} from "@material-ui/icons";

interface InfoCardsProps {

}

const InfoCards: FunctionComponent<InfoCardsProps> = () => {
	return <section className='flex p-8 w-full items-center'>
		<InfoCard text='webmaster@teacher-time.com' className={'sm:mt-0 mt-2'}>
			<div className={'text-yellow-500'}>
				<Mail />
			</div>
		</InfoCard>
	</section>
}

export default InfoCards
