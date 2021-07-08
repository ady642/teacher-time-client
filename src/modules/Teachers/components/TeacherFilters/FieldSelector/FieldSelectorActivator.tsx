import {FunctionComponent} from "react";
import styles from "./fieldSelector.module.scss"
import Image from 'next/image'

interface FieldSelectorActivatorProps {
	onClick: () => void;
	active: boolean;
	label: string
}

const FieldSelectorActivator: FunctionComponent<FieldSelectorActivatorProps> = ({ onClick, active, label }) => {
	return <div onClick={onClick} className={`${styles.fieldSelector} ${active ? styles.fieldSelectorActive: ''}`}>
		<span className={styles.fieldSelectorLabel}>
			{ label ? label : 'Choisissez une matière' }
		</span>
		<span>
			<Image src="/img/icon/chevron-down.png" width={'32'} height="8" alt={'chevron-down'} />
		</span>
	</div>
}

export default FieldSelectorActivator
