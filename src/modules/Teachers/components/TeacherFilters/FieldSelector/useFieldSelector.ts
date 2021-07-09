import {dropdownValue, dropdownValues, setDropdownValue} from "@/common/types/dropdown";
import {useState} from "react";

const useFieldSelector = () => {
	const [fieldSelectorValue, setField] = useState<dropdownValue>({
		value: '',
		label: ''
	})

	const setFieldSelectorValue: setDropdownValue = (value: dropdownValue) => setField(value)

	const fieldSelectorValues: dropdownValues = [{
		value: 'maths',
		label: 'Mathématiques'
	}, {
		value: 'francais',
		label: 'Francais'
	}, {
		value: 'espagnol',
		label: 'Espagnol'
	}, {
		value: 'anglais',
		label: 'Anglais'
	}]

	return {
		setFieldSelectorValue,
		fieldSelectorValue,
		fieldSelectorValues
	}
}

export default useFieldSelector
