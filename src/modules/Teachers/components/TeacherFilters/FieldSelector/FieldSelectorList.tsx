import {FunctionComponent} from "react";
import styles from "@/modules/Teachers/components/TeacherFilters/FieldSelector/fieldSelector.module.scss"
import FieldSelectorListElement
	from "@/modules/Teachers/components/TeacherFilters/FieldSelector/FieldSelectorListElement";
import {dropdownValue, dropdownValues, setDropdownValue} from "@/common/types/dropdown";

interface FieldSelectorListProps {
	opened: boolean;
	values: dropdownValues;
	setValue: setDropdownValue
}

const FieldSelectorList: FunctionComponent<FieldSelectorListProps> = ({ setValue, opened, values }) => {

	return <div className={`${styles.fieldSelector__list} ${opened ? styles.fieldSelector__listOpened : ''}`}>
		{ values.map((DDvalue: dropdownValue) => <FieldSelectorListElement onClick={() => setValue(DDvalue)} key={DDvalue.value}>
			{ DDvalue.label }
		</FieldSelectorListElement>) }
	</div>
}

export default FieldSelectorList
