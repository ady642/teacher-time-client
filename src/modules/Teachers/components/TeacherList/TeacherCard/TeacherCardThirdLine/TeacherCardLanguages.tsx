import {FunctionComponent} from "react";

interface TeacherCardLanguagesProps {
    languages: string[];
}

const TeacherCardLanguages: FunctionComponent<TeacherCardLanguagesProps> = ({ languages }) => {
	return <div>
		{ languages.map((lang: string) => lang) }
	</div>
}

export default TeacherCardLanguages
