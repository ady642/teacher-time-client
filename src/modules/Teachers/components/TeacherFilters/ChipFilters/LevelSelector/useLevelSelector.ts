import {dropdownValue, dropdownValues, setDropdownValue} from "@/common/types/dropdown";
import {useState} from "react";

const useLevelSelector = () => {
	const [level, setLevel] = useState<dropdownValue>({
		value: '',
		label: ''
	})

	const setLevelValue: setDropdownValue = (value: dropdownValue) => setLevel(value)

	const levels: dropdownValues = [{
		value: 'primaire',
		label: 'Primaire'
	}, {
		value: 'collège',
		label: 'Collège'
	}, {
		value: 'lycee',
		label: 'Lycée󠁧'
	}, {
		value: 'superior',
		label: 'Supérieur'
	}]

	return {
		setLevelValue,
		levels,
		level
	}
}

export default useLevelSelector
