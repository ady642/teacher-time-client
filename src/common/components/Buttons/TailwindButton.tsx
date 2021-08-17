import {FunctionComponent} from "react";
import {ButtonProps} from "@/common/types/button";

export interface TailwindButtonProps extends ButtonProps {}

const TailwindButton: FunctionComponent<TailwindButtonProps> = ({
	onClick,
	children,
	className = '',
	type = 'button'
}) => {
	return <button type={type} onClick={onClick} className={`rounded-md transition-all bg-bluegreen hover:bg-green-700 hover:shadow-lg text-white font-bold ${className}`}>
		{ children }
	</button>
}

export default TailwindButton
