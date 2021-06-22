import {FunctionComponent, useState} from "react";
import TimeInfo from "@/modules/Room/Whiteboard/components/Header/TimeInfo";
import dayjs from 'dayjs' // ES 2015

interface TimeInfosProps {
	count: number;
	setCount: (count: number) => void;
}

const TimeInfos: FunctionComponent<TimeInfosProps> = ({ count, setCount }) => {
	const [time, setTime] = useState(dayjs())

	return <section className={'flex'}>
		<TimeInfo className={'mr-12'} title={'Time of the class'} time={time}/>
		<TimeInfo title={'Minutes balance'} time={time}/>
	</section>
}

export default TimeInfos
