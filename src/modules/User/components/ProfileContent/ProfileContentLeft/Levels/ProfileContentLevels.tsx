import {FunctionComponent} from "react";
import ProfileContentElement from "@/modules/User/components/ProfileContent/ProfileContentElement";
import ProfileContentTitle from "@/modules/User/components/ProfileContent/ProfileContentTitle";

interface ProfileContentLevelsProps {
    levels: string[]
}

const ProfileContentLevels: FunctionComponent<ProfileContentLevelsProps> = ({ levels }) => {
	return <>
		<ProfileContentElement>
			<ProfileContentTitle title={'Niveau'} />
		</ProfileContentElement>
		<div>
			{ levels }
		</div>
	</>
}

export default ProfileContentLevels
