import {FunctionComponent} from "react";
import FieldSelector from "@/modules/Teachers/components/TeacherFilters/FieldSelector/FieldSelector";
import ChipFilters from "@/modules/Teachers/components/TeacherFilters/ChipFilters/ChipFilters";

interface TeacherFiltersProps {
}

const TeacherFilters: FunctionComponent<TeacherFiltersProps> = () => {
	return <div className={`flex flex-col mb-4 mt-12`}>
		<div className="flex justify-center">
			<FieldSelector />
		</div>
		<div className={'mt-10'}>
			<ChipFilters />
		</div>
	</div>
}

export default TeacherFilters
