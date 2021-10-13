import {FunctionComponent} from "react";
import AsideInformationsName, {AsideInformationsNameProps} from "@/modules/User/components/AsideInformation/AsideInformationsFirstLine/AsideInformationsName";
import ProfileContentElement from "@/modules/User/components/ProfileContent/ProfileContentElement";

interface ProfileContentNameProps extends AsideInformationsNameProps {

}

const ProfileContentName: FunctionComponent<ProfileContentNameProps> = ({ lastName, firstName }) => {
	return <ProfileContentElement>
		<AsideInformationsName
			firstName={firstName}
			lastName={lastName}
		/>
	</ProfileContentElement>
}

export default ProfileContentName
