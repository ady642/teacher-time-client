import {FunctionComponent} from "react";

interface ProfileContentIconProps {
    src: string;
}

const ProfileContentIcon: FunctionComponent<ProfileContentIconProps> = ({ src }) => {
	return <img className={'mr-2 w-8'} src={src} alt={'profile content icon'}/>
}

export default ProfileContentIcon
