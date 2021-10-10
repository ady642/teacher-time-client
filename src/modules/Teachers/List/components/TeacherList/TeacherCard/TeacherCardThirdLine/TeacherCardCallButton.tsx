import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import Tooltip from "@/common/components/Tooltip/Tooltip";

interface TeacherCardCallButtonProps {
    onClick: Function;
	online: boolean
}

const TeacherCardCallButton: FunctionComponent<TeacherCardCallButtonProps> = ({ onClick, online }) => {
	const { t } =  useTranslation()

	return <Tooltip disabled={online} tooltip={t('teachers.teacherOffline')}>
		<button disabled={!online} className={`rounded-3xl disabled:opacity-50 transition bg-orange hover:bg-red-700 text-white px-5 text-sm font-bold py-1`} onClick={() => onClick()}>
			{ t('teachers.call') }
		</button>
	</Tooltip>

}

export default TeacherCardCallButton
