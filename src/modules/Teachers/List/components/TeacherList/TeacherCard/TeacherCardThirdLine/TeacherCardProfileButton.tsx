import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";

interface TeacherCardCallButtonProps {
	onClick: Function
}

const TeacherCardCallButton: FunctionComponent<TeacherCardCallButtonProps> = ({ onClick }) => {
	const { t } = useTranslation()

	return <button className={`rounded-3xl transition hover:text-red-700 text-orange px-2 py-1 mr-2 text-sm font-bold mt-1`} onClick={() => onClick()}>
		{ t('profile') }
	</button>
}

export default TeacherCardCallButton
