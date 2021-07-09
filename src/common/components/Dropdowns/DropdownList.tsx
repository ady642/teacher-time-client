import {FunctionComponent} from "react";
import styles from "@/common/components/Dropdowns/fieldSelector.module.scss"
import {dropdownValue, dropdownValues, setDropdownValue} from "@/common/types/dropdown";
import DropdownListElement from "@/common/components/Dropdowns/DropdownListElement";

interface DropdownListProps {
	opened: boolean;
	values: dropdownValues;
	setValue: setDropdownValue
}

const DropdownList: FunctionComponent<DropdownListProps> = ({ setValue, opened, values }) => {

	return <div className={`${styles.fieldSelector__list} ${opened ? styles.fieldSelector__listOpened : ''}`}>
		{ values.map((DDvalue: dropdownValue) => <DropdownListElement onClick={() => setValue(DDvalue)} key={DDvalue.value}>
			{ DDvalue.label }
		</DropdownListElement>) }
	</div>
}

export default DropdownList
