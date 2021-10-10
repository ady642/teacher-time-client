import {FunctionComponent} from "react";
import TeacherCardButtons
	from "@/modules/Teachers/List/components/TeacherList/TeacherCard/TeacherCardThirdLine/TeacherCardButtons";
import TeacherCardFields
	from "@/modules/Teachers/List/components/TeacherList/TeacherCard/TeacherCardThirdLine/TeacherCardFields";

interface TeacherCardThirdLineProps {
    onCall: (id: string) => void;
	online: boolean;
    onOpenProfile: (id: string) => void;
    languages: string[];
	fields: string[]
}

const TeacherCardThirdLine: FunctionComponent<TeacherCardThirdLineProps> = ({ online, onCall, onOpenProfile, fields }) => {
	return <div className={'flex items-center justify-between mt-10'}>
		<TeacherCardFields fields={fields}/>
		<TeacherCardButtons online={online} onCall={onCall} onOpenProfile={onOpenProfile}/>
	</div>
}

export default TeacherCardThirdLine
