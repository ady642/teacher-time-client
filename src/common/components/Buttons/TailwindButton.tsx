import {FunctionComponent} from "react";
import {ButtonProps} from "@/common/types/button";
import buttonsStyle from '@/common/components/Buttons/styles/buttons.module.scss'
import classNames from "classnames";

export interface TailwindButtonProps extends ButtonProps {}

const TailwindButton: FunctionComponent<TailwindButtonProps> = ({
	onClick,
	children,
	className = '',
	type = 'button',
	outlined = false,
	size = 'medium'
}) => {
	const classes = classNames([
		buttonsStyle['tt-button'],
		className,
		{
			[buttonsStyle['tt-button--outlined']]: outlined,
			[buttonsStyle['tt-button--default']]: !outlined,
			[buttonsStyle['tt-button--size-small']]: size === 'small',
			[buttonsStyle['tt-button--size-medium']]: size === 'medium',
			[buttonsStyle['tt-button--size-large']]: size === 'large',
		}
	])

	return <button
		type={type}
		onClick={(e) => onClick(e)}
		className={classes}
	>
		{ children }
	</button>
}

export default TailwindButton
