import {FunctionComponent} from "react";
import TeacherCardButtons
	from "@/modules/Teachers/List/components/TeacherList/TeacherCard/TeacherCardThirdLine/TeacherCardButtons";

interface TeacherCardThirdLineProps {
    onCall: (id: string) => void;
    onOpenProfile: (id: string) => void;
    languages: string[];
}

const TeacherCardThirdLine: FunctionComponent<TeacherCardThirdLineProps> = ({ onCall, onOpenProfile, languages }) => {
	return <div className={'flex items-center justify-between mt-10'}>
		<TeacherCardButtons onCall={onCall} onOpenProfile={onOpenProfile}/>
	</div>
}

export default TeacherCardThirdLine
