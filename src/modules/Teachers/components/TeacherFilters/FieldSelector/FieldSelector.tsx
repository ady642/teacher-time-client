import {FunctionComponent} from "react";
import styles from "./fieldSelector.module.scss"
import Image from 'next/image'

interface FieldSelectorProps {

}

const FieldSelector: FunctionComponent<FieldSelectorProps> = () => {
	return <div className={styles.fieldSelector}>
		<span className={styles.fieldSelectorLabel}>
                Choose a subject
		</span>
		<span>
			<Image src="/img/icon/chevron-down.png" width={'32'} height="8" alt={'chevron-down'} />
		</span>
	</div>
}

export default FieldSelector
