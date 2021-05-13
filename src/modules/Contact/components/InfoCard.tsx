import {FunctionComponent} from "react";

interface InfoCardProps {
    title: string;
    text: string;
    children: any;
    className?: string
}

const InfoCard: FunctionComponent<InfoCardProps> = ({ children, title, text, className }) => {
	return <div className={`flex ${className}`}>
		{ children }
		<div className='flex flex-col ml-2'>
			<h2 className={'text-xl font-bold capitalize'}>{ title }</h2>
			<p className={'text-gray-400'}>{ text }</p>
		</div>
	</div>
}

export default InfoCard
