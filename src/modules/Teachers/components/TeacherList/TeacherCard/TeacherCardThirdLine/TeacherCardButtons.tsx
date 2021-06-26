import {FunctionComponent} from "react";

interface TeacherCardButtonsProps {
    onCall: (id: string) => void;
}

const TeacherCardButtons: FunctionComponent<TeacherCardButtonsProps> = ({ onCall }) => {
	return <div>
		<button onClick={() => onCall('test')} />
	</div>
}

export default TeacherCardButtons
