import {FunctionComponent} from "react";
import styles from '@/modules/Teachers/components/TeacherFilters/FieldSelector/fieldSelector.module.scss'

interface FieldSelectorListElementProps {
	children: any;
	onClick: () => void
}

const FieldSelectorListElement: FunctionComponent<FieldSelectorListElementProps> = ({ children, onClick }) => {
	return <div onClick={() => onClick()} className={styles.fieldSelector__list__element}>
		{ children }
	</div>
}

export default FieldSelectorListElement
