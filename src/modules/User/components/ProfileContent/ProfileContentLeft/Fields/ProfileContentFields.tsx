import {FunctionComponent} from "react";
import ProfileContentElement from "@/modules/User/components/ProfileContent/ProfileContentElement";

interface ProfileContentFieldsProps {
    fields: string[];
	openEditionModal: (fieldToModify:string) => void;
}

const ProfileContentFields: FunctionComponent<ProfileContentFieldsProps> = ({ fields, openEditionModal }) => {
	return <ProfileContentElement  onPencilClick={() => openEditionModal('fields')} title={'Vos spécialités'}>
		<div>
			{ fields }
		</div>
	</ProfileContentElement>
}

export default ProfileContentFields
