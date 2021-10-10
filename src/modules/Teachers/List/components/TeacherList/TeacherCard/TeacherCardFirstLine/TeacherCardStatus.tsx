import {FunctionComponent} from "react";
import {Circle} from "@material-ui/icons";
import useTranslation from "@/common/hooks/useTranslation";

interface TeacherCardStatusProps {
    online: boolean
}

const TeacherCardStatus: FunctionComponent<TeacherCardStatusProps> = ({ online }) => {
	const { t } = useTranslation()

	return <div className="flex items-center mt-2">
		<Circle className={`${online ? 'text-green-600': 'text-red-600'} text-sm mr-1`}/>
		<span className={`${online ? 'text-green-600': 'text-red-600'} text-sm`}>{ online ? t('teachers.online') : t('teachers.offline') }</span>
	</div>
}

export default TeacherCardStatus
