import {FunctionComponent} from "react";
import {ButtonProps} from "@/common/types/button";
import buttonsStyle from '@/common/components/Buttons/styles/buttons.module.scss'

export interface TailwindButtonProps extends ButtonProps {}

const TailwindButton: FunctionComponent<TailwindButtonProps> = ({
	onClick,
	children,
	className = '',
	type = 'button'
}) => {
	return <button
		type={type}
		onClick={(e) => onClick(e)}
		className={`${className} ${buttonsStyle['tt-button']}`}
	>
		{ children }
	</button>
}

export default TailwindButton
