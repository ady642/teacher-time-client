import {FunctionComponent} from "react";

interface TimeInfoProps {
    className?: string;
    title: string;
    time: string|number;
}

const TimeInfo: FunctionComponent<TimeInfoProps> = ({ className = '', title, time}) => {
	return <div className={`flex flex-col justify-center items-center ${className}`}>
		<span className="text-gray-500 text-sm">
			{title}
		</span>
		<span className="mt-2 font-bold">
			{time}
		</span>
	</div>
}

export default TimeInfo
