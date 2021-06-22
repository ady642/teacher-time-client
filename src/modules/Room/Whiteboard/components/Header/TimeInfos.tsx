import {FunctionComponent} from "react";
import TimeInfo from "@/modules/Room/Whiteboard/components/Header/TimeInfo";

interface TimeInfosProps {

}

const TimeInfos: FunctionComponent<TimeInfosProps> = () => {
	return <section className={'flex'}>
		<TimeInfo className={'mr-12'} title={'Time of the class'} time={'08:53'}/>
		<TimeInfo title={'Minutes balance'} time={'53 min'}/>
	</section>
}

export default TimeInfos
