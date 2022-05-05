import {FunctionComponent, useEffect, useState} from "react";
import TimeInfo from "@/modules/Room/Whiteboard/components/Header/TimeInfo";
import dayjs from 'dayjs' // ES 2015
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration);

interface TimeInfosProps {
	count: number;
}

const TimeInfos: FunctionComponent<TimeInfosProps> = ({ count }) => {
	const [time, setTime] = useState('')

	useEffect(() => {
		setTime(dayjs.duration(count, 'minutes').format('HH:mm'))
	}, [count])

	return <section className={'flex'}>
		<TimeInfo className={'mr-12'} title={'Time of the class'} time={time} />
	</section>
}

export default TimeInfos
