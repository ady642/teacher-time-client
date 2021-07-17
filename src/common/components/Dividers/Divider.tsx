import {FunctionComponent} from "react";
import styles from "./divider.module.scss";

interface TTDividerProps {
    text?: string;
}

const TTDivider: FunctionComponent<TTDividerProps> = ({ text = '' }) => <div className={styles.divider}>{ text }</div>

export default TTDivider
