import {FunctionComponent, useState} from "react";
import {dropdownValue, dropdownValues, setDropdownValue} from "@/common/types/dropdown";
import Dropdown from "@/common/components/Dropdowns/Dropdown";

interface FieldSelectorProps {
	values: dropdownValues;
	DDvalue: dropdownValue;
	setValue: setDropdownValue
}

const FieldSelector: FunctionComponent<FieldSelectorProps> = ({ values, DDvalue, setValue }) => {
	const [openedSelector, setOpenedSelector] = useState(false)

	return <Dropdown
		values={values}
		DDvalue={DDvalue}
		setValue={setValue}
		opened={openedSelector}
		setOpened={setOpenedSelector}
	/>
}

export default FieldSelector
