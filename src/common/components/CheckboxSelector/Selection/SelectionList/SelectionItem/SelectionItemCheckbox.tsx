import {FunctionComponent} from "react";
import TTCheckbox from "@/common/components/Inputs/TTCheckbox";

interface FieldSelectionItemCheckboxProps {
	value: boolean;
	setValue?: (value: boolean) => void;
}

const SelectionItemCheckbox: FunctionComponent<FieldSelectionItemCheckboxProps> = ({ value, setValue }) => {
	return <TTCheckbox value={value} setValue={setValue} />
}

export default SelectionItemCheckbox
