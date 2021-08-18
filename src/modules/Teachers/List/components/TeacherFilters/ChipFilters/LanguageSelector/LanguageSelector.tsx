import {FunctionComponent, useState} from "react";
import Dropdown from "@/common/components/Dropdowns/Dropdown";
import ChipFilter from "@/modules/Teachers/List/components/TeacherFilters/ChipFilters/ChipFilter";
import {dropdownValue, dropdownValues, setDropdownValue} from "@/common/types/dropdown";

export interface LanguageSelectorProps {
    languages: dropdownValues;
    language: dropdownValue;
    setLanguage: setDropdownValue;
}

const LanguageSelector: FunctionComponent<LanguageSelectorProps> = ({
	language,
	setLanguage,
	languages
}) => {
	const [openedLanguageSelector, setOpenedLanguageSelector] = useState(false)

	return <Dropdown
		values={languages}
		DDvalue={language}
		setValue={setLanguage}
		opened={openedLanguageSelector}
		setOpened={setOpenedLanguageSelector}
		activator={<ChipFilter
			onClick={() => setOpenedLanguageSelector(!openedLanguageSelector)}
			active={openedLanguageSelector}
			label={language.label}>
			<span>
				{ language.label ? language.label : 'Langue' }
			</span>
		</ChipFilter>}
		className={'w-40 relative'}
	/>
}

export default LanguageSelector
