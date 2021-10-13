import {FunctionComponent} from "react";
import ProfileContentElement from "@/modules/User/components/ProfileContent/ProfileContentElement";
import ProfileContentTitle from "@/modules/User/components/ProfileContent/ProfileContentTitle";

interface ProfileContentDescriptionProps {
    description: string
}

const ProfileContentDescription: FunctionComponent<ProfileContentDescriptionProps> = ({ description }) => {
	return <>
		<ProfileContentElement>
			<ProfileContentTitle title={'Titre de votre annonce'} />
		</ProfileContentElement>
		<div>
			{ description }
		</div>
	</>
}

export default ProfileContentDescription
