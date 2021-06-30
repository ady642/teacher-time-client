import {FunctionComponent} from "react";
import ChipFilter from "@/modules/Teachers/components/TeacherFilters/ChipFilters/ChipFilter";

interface ChipFiltersProps {

}

const ChipFilters: FunctionComponent<ChipFiltersProps> = () => {
	return <div className={'flex w-1/5'}>
		<ChipFilter className={'mr-4'}>
			Langues
		</ChipFilter>
		<ChipFilter>
			Niveau
		</ChipFilter>
	</div>
}

export default ChipFilters
