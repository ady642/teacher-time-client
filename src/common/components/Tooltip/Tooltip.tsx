import styles from './tooltip.module.scss'
import {FunctionComponent, ReactNode } from "react";

interface TooltipProps {
    children: ReactNode,
    tooltip: string
}

const Tooltip: FunctionComponent<TooltipProps> = ({ children, tooltip = '' }) => {
	return <div className={styles.tooltip} data-tooltip={tooltip}>
		{ children }
	</div>
}

export default Tooltip
