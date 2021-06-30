import {FunctionComponent} from "react";
import TeacherCardDescription
	from "@/modules/Teachers/components/TeacherList/TeacherCard/TeacherCardSecondLine/TeacherCardDescription";

interface TeacherCardSecondLineProps {
    description: string
}

const TeacherCardSecondLine: FunctionComponent<TeacherCardSecondLineProps> = ({ description }) => {
	return <div className={'leading-3 mt-5'}>
		<TeacherCardDescription description={description} />
	</div>
}

export default TeacherCardSecondLine
