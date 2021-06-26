import {FunctionComponent} from "react";
import ChipFilter from "@/modules/Teachers/components/TeacherFilters/ChipFilters/ChipFilter";

interface ChipFiltersProps {

}

const ChipFilters: FunctionComponent<ChipFiltersProps> = () => {
	return <div className={'flex w-1/5'}>
		<ChipFilter className={'mr-4'}>
			Idioma
		</ChipFilter>
		<ChipFilter>
			Nivel
		</ChipFilter>
	</div>
}

export default ChipFilters
