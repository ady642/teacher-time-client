import {FunctionComponent} from "react";
import {Circle} from "@material-ui/icons";

interface TeacherCardStatusProps {
    online: boolean
}

const TeacherCardStatus: FunctionComponent<TeacherCardStatusProps> = ({ online }) => {
	return <div className="flex items-center mt-2">
		<Circle className={`${online ? 'text-green-600': 'text-red-600'} text-sm mr-1`}/>
		<span className={`${online ? 'text-green-600': 'text-red-600'} text-sm`}>{ online ? 'Online' : 'Offline' }</span>
	</div>
}

export default TeacherCardStatus
