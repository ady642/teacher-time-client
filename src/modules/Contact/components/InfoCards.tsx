import {FunctionComponent} from "react";
import InfoCard from "@/modules/Contact/components/InfoCard";
import {Mail} from "@material-ui/icons";

const InfoCards: FunctionComponent = () => {
	return <section className='flex w-full items-center'>
		<InfoCard text='webmaster@teacher-time.com' className={'sm:mt-0 mt-2 p-5 border border-gray rounded'}>
			<div className={'text-yellow-500 mr-4'}>
				<Mail fontSize={'large'} />
			</div>
		</InfoCard>
	</section>
}

export default InfoCards
