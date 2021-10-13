import {FunctionComponent} from "react";
import ProfileContentElement from "@/modules/User/components/ProfileContent/ProfileContentElement";
import ProfileContentTitle from "@/modules/User/components/ProfileContent/ProfileContentTitle";

interface ProfileContentFieldsProps {
    fields: string[]
}

const ProfileContentFields: FunctionComponent<ProfileContentFieldsProps> = ({ fields }) => {
	return <ProfileContentElement>
		<ProfileContentTitle title={'Vos spécialités'} />
		<div>
			{ fields }
		</div>
	</ProfileContentElement>
}

export default ProfileContentFields
