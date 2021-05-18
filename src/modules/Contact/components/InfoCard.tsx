import {FunctionComponent} from "react";

interface InfoCardProps {
    text: string;
    children: any;
    className?: string
}

const InfoCard: FunctionComponent<InfoCardProps> = ({ children, text, className }) => {
	return <div className={`flex items-center ${className}`}>
		{ children }
		<p className={'sm:text-ml text-sm text-gray-400'}>{ text }</p>
	</div>
}

export default InfoCard