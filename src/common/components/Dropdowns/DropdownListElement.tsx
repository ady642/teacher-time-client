import {FunctionComponent} from "react";
import styles from '@/common/components/Dropdowns/fieldSelector.module.scss'

interface DropdownListElementProps {
	children: any;
	onClick: () => void
}

const DropdownListElement: FunctionComponent<DropdownListElementProps> = ({ children, onClick }) => {
	return <div onClick={() => onClick()} className={styles.fieldSelector__list__element}>
		{ children }
	</div>
}

export default DropdownListElement
