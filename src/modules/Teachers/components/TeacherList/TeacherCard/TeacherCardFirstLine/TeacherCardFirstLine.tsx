import {FunctionComponent} from "react";
import TeacherCardName
	from "@/modules/Teachers/components/TeacherList/TeacherCard/TeacherCardFirstLine/TeacherCardName";
import TeacherCardRating
	from "@/modules/Teachers/components/TeacherList/TeacherCard/TeacherCardFirstLine/TeacherCardRating";

interface TeacherCardFirstLineProps {
	name: string;
	rating: number;
}

const TeacherCardFirstLine: FunctionComponent<TeacherCardFirstLineProps> = ({ rating, name }) => {
	return <div className={'flex justify-between'}>
		<TeacherCardName name={name} />
		<TeacherCardRating rating={rating} />
	</div>
}

export default TeacherCardFirstLine
