import {FunctionComponent} from "react";
import {Dayjs} from "dayjs";

interface TimeInfoProps {
    className?: string;
    title: string;
    time: Dayjs;
}

const TimeInfo: FunctionComponent<TimeInfoProps> = ({ className = '', title, time}) => {
	return <div className={`flex flex-col justify-center items-center ${className}`}>
		<span className="text-gray-500 text-sm">
			{title}
		</span>
		<span className="mt-2 font-bold">
			{time.toString()}
		</span>
	</div>
}

export default TimeInfo
