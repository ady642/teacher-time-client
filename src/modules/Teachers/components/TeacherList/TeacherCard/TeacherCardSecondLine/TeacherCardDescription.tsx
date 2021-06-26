import {FunctionComponent} from "react";

interface TeacherCardDescriptionProps {
    description: string;
}

const TeacherCardDescription: FunctionComponent<TeacherCardDescriptionProps> = ({ description }) => {
	return <span className="text-md">
		{ description }
	</span>
}

export default TeacherCardDescription
