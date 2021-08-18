import {FunctionComponent} from "react";

interface TeacherCardAvatarProps {
    avatar: string
}

const TeacherCardAvatar: FunctionComponent<TeacherCardAvatarProps> = ({ avatar }) => {
	return <div className={'h-40 object-cover rounded-t-3xl'}>
		<img className={'rounded-t-3xl w-full h-full'} src={avatar} alt={'avatar'}/>
	</div>
}

export default TeacherCardAvatar
