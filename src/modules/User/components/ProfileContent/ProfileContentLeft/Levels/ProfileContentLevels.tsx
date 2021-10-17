import {FunctionComponent} from "react";
import ProfileContentElement from "@/modules/User/components/ProfileContent/ProfileContentElement";

interface ProfileContentLevelsProps {
    levels: string[];
	openEditionModal: (fieldToModify:string) => void;
}

const ProfileContentLevels: FunctionComponent<ProfileContentLevelsProps> = ({ levels, openEditionModal }) => {
	return <ProfileContentElement onPencilClick={() => openEditionModal('levels')} title={'Niveau'}>
		<div>
			{ levels }
		</div>
	</ProfileContentElement>

}

export default ProfileContentLevels
