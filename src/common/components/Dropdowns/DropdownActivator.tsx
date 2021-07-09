import {FunctionComponent} from "react";
import styles from "./fieldSelector.module.scss"
import Image from 'next/image'

interface DropdownActivatorProps {
	onClick: () => void;
	active: boolean;
	label: string
}

const DropdownActivator: FunctionComponent<DropdownActivatorProps> = ({ onClick, active, label }) => {
	return <div onClick={onClick} className={`${styles.fieldSelector} ${active ? styles.fieldSelectorActive: ''}`}>
		<span className={styles.fieldSelectorLabel}>
			{ label ? label : 'Choisissez une matière' }
		</span>
		<span>
			<Image src="/img/icon/chevron-down.png" width={'32'} height="8" alt={'chevron-down'} />
		</span>
	</div>
}

export default DropdownActivator
