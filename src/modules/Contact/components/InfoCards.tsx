import {FunctionComponent} from "react";
import InfoCard from "@/modules/Contact/components/InfoCard";
import {Mail} from "@material-ui/icons";

const InfoCards: FunctionComponent = () => {
	return <section className='flex w-full items-center'>
		<InfoCard text='webmaster@teacher-time.com' className={'sm:mt-0 mt-2 p-5 border border-gray-400 rounded'}>
			<a href="mailto:webmaster@teacher-time.com" className={'text-yellow-500 flex items-center'}>
				<Mail className={'mr-4'} fontSize={'large'} />
				<p className={'sm:text-xl text-sm text-gray-500'}>webmaster@teacher-time.com</p>
			</a>
		</InfoCard>
	</section>
}

export default InfoCards
