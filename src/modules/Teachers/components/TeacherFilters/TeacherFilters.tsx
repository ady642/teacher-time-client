import {FunctionComponent} from "react";
import FieldSelector from "@/modules/Teachers/components/TeacherFilters/FieldSelector/FieldSelector";
import ChipFilters from "@/modules/Teachers/components/TeacherFilters/ChipFilters/ChipFilters";
import {dropdownValue, dropdownValues, setDropdownValue} from "@/common/types/dropdown";
import {LanguageSelectorProps} from "@/modules/Teachers/components/TeacherFilters/ChipFilters/LanguageSelector/LanguageSelector";
import {LevelSelectorProps} from "@/modules/Teachers/components/TeacherFilters/ChipFilters/LevelSelector/LevelSelector";

type TeacherFiltersProps = {
	fieldSelectorValues: dropdownValues;
	fieldSelectorValue: dropdownValue;
	setFieldSelectorValue: setDropdownValue;
} & LanguageSelectorProps & LevelSelectorProps

const TeacherFilters: FunctionComponent<TeacherFiltersProps> = ({
	setFieldSelectorValue,
	fieldSelectorValues,
	fieldSelectorValue,
	languages,
	language,
	setLanguage,
	level,setLevel,levels
}) => {
	return <div className={`flex flex-col mb-4 md:mt-6 sm:mt-12 mt-3`}>
		<div className="flex justify-center">
			<FieldSelector setValue={setFieldSelectorValue} DDvalue={fieldSelectorValue} values={fieldSelectorValues}/>
		</div>
		<div className={'mt-10'}>
			<ChipFilters
				languages={languages} language={language} setLanguage={setLanguage}
				level={level} setLevel={setLevel} levels={levels}
			/>
		</div>
	</div>
}

export default TeacherFilters
