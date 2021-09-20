import {FunctionComponent} from "react";
import TeacherCardCallButton
	from "@/modules/Teachers/List/components/TeacherList/TeacherCard/TeacherCardThirdLine/TeacherCardCallButton";

interface TeacherCardButtonsProps {
    onCall: (id: string) => void;
    onOpenProfile: (id: string) => void
}

const TeacherCardButtons: FunctionComponent<TeacherCardButtonsProps> = ({ onCall }) => {
	return <div className={'flex'}>
		<TeacherCardCallButton onClick={onCall}/>
	</div>
}

export default TeacherCardButtons
