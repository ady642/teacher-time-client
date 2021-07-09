import {FunctionComponent, useState} from "react";
import Dropdown from "@/common/components/Dropdowns/Dropdown";
import ChipFilter from "@/modules/Teachers/components/TeacherFilters/ChipFilters/ChipFilter";
import {dropdownValue, dropdownValues, setDropdownValue} from "@/common/types/dropdown";

export interface LevelSelectorProps {
    levels: dropdownValues;
    level: dropdownValue;
    setLevel: setDropdownValue;
}

const LanguageSelector: FunctionComponent<LevelSelectorProps> = ({
	level,
	levels,
	setLevel
}) => {
	const [openedLevelSelector, setOpenedLevelSelector] = useState(false)

	return <Dropdown
		values={levels}
		DDvalue={level}
		setValue={setLevel}
		opened={openedLevelSelector}
		setOpened={setOpenedLevelSelector}
		activator={<ChipFilter
			onClick={() => setOpenedLevelSelector(!openedLevelSelector)}
			active={openedLevelSelector}
			label={level.label}>
			<span>
				{ level.label ? level.label : 'Niveau' }
			</span>
		</ChipFilter>}
		className={'w-40 relative'}
	/>
}

export default LanguageSelector
