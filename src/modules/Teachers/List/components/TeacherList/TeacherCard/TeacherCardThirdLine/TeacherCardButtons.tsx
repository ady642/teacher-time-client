import {FunctionComponent} from "react";
import TeacherCardCallButton
	from "@/modules/Teachers/List/components/TeacherList/TeacherCard/TeacherCardThirdLine/TeacherCardCallButton";

interface TeacherCardButtonsProps {
    onCall: (id: string) => void;
    onOpenProfile: (id: string) => void;
	online: boolean
}

const TeacherCardButtons: FunctionComponent<TeacherCardButtonsProps> = ({ onCall, online }) => {
	return <div className={'flex'}>
		<TeacherCardCallButton online={online} onClick={onCall}/>
	</div>
}

export default TeacherCardButtons
