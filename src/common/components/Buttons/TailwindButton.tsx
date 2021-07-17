import {FunctionComponent} from "react";
import {ButtonProps} from "@/common/types/button";

export interface TailwindButtonProps extends ButtonProps {}

const TailwindButton: FunctionComponent<TailwindButtonProps> = ({ onClick, children, className = '' }) => {
	return <button onClick={onClick} className={`rounded-3xl transition bg-orange hover:bg-red-700 text-white font-bold ${className}`}>
		{ children }
	</button>
}

export default TailwindButton
