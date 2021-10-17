import {FunctionComponent} from "react";
import {AsideInformationsNameProps} from "@/modules/User/components/AsideInformation/AsideInformationsFirstLine/AsideInformationsName";
import ProfileContentElement from "@/modules/User/components/ProfileContent/ProfileContentElement";
import ProfileContentCertificate
	from "@/modules/User/components/ProfileContent/ProfileContentLeft/ProfileContentCertificate";

interface ProfileContentNameProps extends AsideInformationsNameProps {
	openEditionModal: (fieldToModify: string) => void
}

const ProfileContentName: FunctionComponent<ProfileContentNameProps> = ({ openEditionModal, lastName, firstName }) => {
	return <ProfileContentElement
		title={`${firstName} ${lastName}`}
		onPencilClick={() => openEditionModal('name')}
	>
		<ProfileContentCertificate />
	</ProfileContentElement>
}

export default ProfileContentName
