import {FunctionComponent} from "react";

interface TeacherCardNameProps {
    name: string
}

const TeacherCardName: FunctionComponent<TeacherCardNameProps> = ({ name }) => {
	return <span className="text-xl font-bold mr-2">
		{ name }
	</span>
}

export default TeacherCardName
