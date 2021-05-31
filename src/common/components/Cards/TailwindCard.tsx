import {FunctionComponent, ReactNode} from "react";

interface TailwindCardProps {
    children: ReactNode;
    className ?: string
}

const TailwindCard: FunctionComponent<TailwindCardProps> = ({children, className = ''}) => {
	return <div className={`${className} flex flex-col items-center bg-white shadow-lg rounded-lg`}>
		{children}
	</div>
}

export default TailwindCard
