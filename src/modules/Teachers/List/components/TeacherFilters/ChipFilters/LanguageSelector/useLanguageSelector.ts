import {dropdownValue, dropdownValues, setDropdownValue} from "@/common/types/dropdown";
import {useState} from "react";

const useLanguageSelector = () => {
	const [languageValue, setLanguage] = useState<dropdownValue>({
		value: '',
		label: ''
	})

	const setLanguageValue: setDropdownValue = (value: dropdownValue) => setLanguage(value)

	const languageValues: dropdownValues = [{
		value: 'fr',
		label: '🇫🇷 Francais'
	}, {
		value: 'es',
		label: '🇪🇸 Espagnol'
	}, {
		value: 'en',
		label: '🇬🇧󠁧󠁢󠁥󠁮󠁧󠁿 Anglais'
	}]

	return {
		setLanguageValue,
		languageValue,
		languageValues
	}
}

export default useLanguageSelector
