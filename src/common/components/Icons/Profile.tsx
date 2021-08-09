import {FunctionComponent} from "react";

interface ProfileProps {
	className?: string
}

const Profile: FunctionComponent<ProfileProps> = ({ className }) => {
	return <img className={className} src='/img/icon/profile.svg' alt='profile'/>
}

export default Profile
