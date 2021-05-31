import {FunctionComponent} from "react";

interface InfoCardProps {
    text: string;
    children: any;
    className?: string
}

const InfoCard: FunctionComponent<InfoCardProps> = ({ children, text, className }) => {
	return <div className={`flex items-center ${className}`}>
		{ children }
		<p className={'sm:text-xl text-sm text-white'}>{ text }</p>
	</div>
}

export default InfoCard
