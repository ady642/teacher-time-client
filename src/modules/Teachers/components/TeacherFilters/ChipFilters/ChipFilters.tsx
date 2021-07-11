import {FunctionComponent} from "react";
import LevelSelector, {LevelSelectorProps} from "@/modules/Teachers/components/TeacherFilters/ChipFilters/LevelSelector/LevelSelector";

type ChipFiltersProps = LevelSelectorProps

const ChipFilters: FunctionComponent<ChipFiltersProps> = ({
	levels, setLevel, level
}) => {
	return <section className={'flex'}>
		<LevelSelector levels={levels} level={level} setLevel={setLevel} />
	</section>
}

export default ChipFilters
