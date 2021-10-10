import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";

interface TeacherCardCallButtonProps {
    onClick: Function
}

const TeacherCardCallButton: FunctionComponent<TeacherCardCallButtonProps> = ({ onClick }) => {
	const { t } =  useTranslation()

	return <button className={`rounded-3xl transition bg-orange hover:bg-red-700 text-white px-5 text-sm font-bold py-1`} onClick={() => onClick()}>
		{ t('teachers.call') }
	</button>
}

export default TeacherCardCallButton
