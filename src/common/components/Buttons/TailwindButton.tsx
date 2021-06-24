import React, {FunctionComponent} from "react";

interface TailwindButtonProps {
    onClick?: () => void;
    children?: any;
    className?: string
}

const TailwindButton: FunctionComponent<TailwindButtonProps> = ({ onClick, children, className = '' }) => {
	return <button onClick={onClick} className={`rounded-3xl transition bg-orange hover:bg-red-700 text-white font-bold md:text-lg text-sm md:px-4 md:p-2 p-1 ${className}`}>
		{ children }
	</button>
}

export default TailwindButton
