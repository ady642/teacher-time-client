import {FunctionComponent} from "react";
import TeacherCardName
	from "@/modules/Teachers/List/components/TeacherList/TeacherCard/TeacherCardFirstLine/TeacherCardName";
import TeacherCardRating
	from "@/modules/Teachers/List/components/TeacherList/TeacherCard/TeacherCardFirstLine/TeacherCardRating";
import TeacherCardStatus
	from "@/modules/Teachers/List/components/TeacherList/TeacherCard/TeacherCardFirstLine/TeacherCardStatus";

interface TeacherCardFirstLineProps {
	name: string;
	rating: number;
	online: boolean;
}

const TeacherCardFirstLine: FunctionComponent<TeacherCardFirstLineProps> = ({ online, rating, name }) => {
	return <div className={'flex justify-between'}>
		<TeacherCardName name={name} />
		<div className={'flex flex-col items-end'}>
			<TeacherCardRating rating={rating} />
			<TeacherCardStatus online={online}/>
		</div>
	</div>
}

export default TeacherCardFirstLine
