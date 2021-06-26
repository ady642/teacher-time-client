import {FunctionComponent} from "react";
import TeacherCardLanguages
	from "@/modules/Teachers/components/TeacherList/TeacherCard/TeacherCardThirdLine/TeacherCardLanguages";
import TeacherCardButtons
	from "@/modules/Teachers/components/TeacherList/TeacherCard/TeacherCardThirdLine/TeacherCardButtons";

interface TeacherCardThirdLineProps {
    onCall: (id: string) => void;
    languages: string[];
}

const TeacherCardThirdLine: FunctionComponent<TeacherCardThirdLineProps> = ({ onCall, languages }) => {
	return <div className={'flex justify-between'}>
		<TeacherCardLanguages languages={languages}/>
		<TeacherCardButtons onCall={onCall}/>
	</div>
}

export default TeacherCardThirdLine
