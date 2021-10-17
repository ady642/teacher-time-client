import {FunctionComponent} from "react";
import styles from './style.module.scss'
import classNames from "classnames";
import Ripple from "@/common/components/Ripple/Ripple";

interface TabProps {
    name: string;
    active: boolean;
    onClick: () => void
}

const Tab: FunctionComponent<TabProps> = ({ onClick, active, name }) => {
	const tabClasses = classNames(styles['tab'], { [styles['tab--active']]: active })

	return <Ripple>
		<div onClick={onClick} className={tabClasses}>
			{ name }
		</div>
	</Ripple>
}

export default Tab
