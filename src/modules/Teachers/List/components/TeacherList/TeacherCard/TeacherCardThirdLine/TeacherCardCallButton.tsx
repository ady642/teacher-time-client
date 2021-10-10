import {FunctionComponent} from "react";

interface TeacherCardCallButtonProps {
    onClick: Function
}

const TeacherCardCallButton: FunctionComponent<TeacherCardCallButtonProps> = ({ onClick }) => {
	return <button className={`rounded-3xl transition bg-orange hover:bg-red-700 text-white px-5 text-sm font-bold py-1`} onClick={() => onClick()}>
		Appeler
	</button>
}

export default TeacherCardCallButton
