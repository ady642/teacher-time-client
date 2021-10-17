import {FunctionComponent} from "react";
import ProfileContentElement from "@/modules/User/components/ProfileContent/ProfileContentElement";

interface ProfileContentDescriptionProps {
    description: string;
	openEditionModal: (fieldToModify:string) => void
}

const ProfileContentDescription: FunctionComponent<ProfileContentDescriptionProps> = ({ openEditionModal, description }) => {
	return 	<ProfileContentElement
		onPencilClick={() => openEditionModal("description")}
		title={'Titre de votre annonce'}
	>
		<div>
			{ description }
		</div>
	</ProfileContentElement>

}

export default ProfileContentDescription
