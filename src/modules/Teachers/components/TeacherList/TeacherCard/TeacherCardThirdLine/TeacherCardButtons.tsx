import {FunctionComponent} from "react";
import TeacherCardCallButton
	from "@/modules/Teachers/components/TeacherList/TeacherCard/TeacherCardThirdLine/TeacherCardCallButton";
import TeacherCardProfileButton
	from "@/modules/Teachers/components/TeacherList/TeacherCard/TeacherCardThirdLine/TeacherCardProfileButton";

interface TeacherCardButtonsProps {
    onCall: (id: string) => void;
    onOpenProfile: (id: string) => void
}

const TeacherCardButtons: FunctionComponent<TeacherCardButtonsProps> = ({ onCall, onOpenProfile }) => {
	return <div className={'flex'}>
		<TeacherCardProfileButton onClick={onOpenProfile}/>
		<TeacherCardCallButton onClick={onCall}/>
	</div>
}

export default TeacherCardButtons
