import {FunctionComponent} from "react";

interface TeacherCardDescriptionProps {
    description: string;
}

const TeacherCardDescription: FunctionComponent<TeacherCardDescriptionProps> = ({ description }) => {
	return <span className="text-xs text-gray-700">
		{ description }
	</span>
}

export default TeacherCardDescription
