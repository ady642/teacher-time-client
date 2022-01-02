import styles from './tooltip.module.scss'
import {FunctionComponent, ReactNode } from "react";

interface TooltipProps {
    children: ReactNode,
    tooltip: string | number,
    disabled: boolean,
}

const Tooltip: FunctionComponent<TooltipProps> = ({ disabled, children, tooltip = '' }) => {
	return <div className={`${styles.tooltip} ${ disabled ? styles.disabled : '' }`} data-tooltip={tooltip}>
		{ children }
	</div>
}

export default Tooltip
