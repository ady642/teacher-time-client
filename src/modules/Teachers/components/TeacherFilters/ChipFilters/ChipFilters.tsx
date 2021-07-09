import {FunctionComponent} from "react";
import LanguageSelector, {LanguageSelectorProps} from "@/modules/Teachers/components/TeacherFilters/ChipFilters/LanguageSelector/LanguageSelector";
import LevelSelector, {LevelSelectorProps} from "@/modules/Teachers/components/TeacherFilters/ChipFilters/LevelSelector/LevelSelector";

type ChipFiltersProps = LanguageSelectorProps & LevelSelectorProps

const ChipFilters: FunctionComponent<ChipFiltersProps> = ({
	languages, language, setLanguage,
	levels, setLevel, level
}) => {
	return <section className={'flex'}>
		<div className="mr-4">
			<LanguageSelector languages={languages} language={language} setLanguage={setLanguage} />
		</div>
		<LevelSelector levels={levels} level={level} setLevel={setLevel} />
	</section>
}

export default ChipFilters
