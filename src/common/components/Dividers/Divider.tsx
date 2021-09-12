import {FunctionComponent} from "react";
import styles from "./divider.module.scss";

interface TTDividerProps {
    text?: string;
    className?: string
}

const TTDivider: FunctionComponent<TTDividerProps> = ({ text = '', className = '' }) =>
	<div className={`${styles.divider} ${className}`}>{ text }</div>

export default TTDivider
