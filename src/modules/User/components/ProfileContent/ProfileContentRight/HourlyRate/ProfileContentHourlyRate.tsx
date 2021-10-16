import {FunctionComponent} from "react";
import ProfileContentElement from "@/modules/User/components/ProfileContent/ProfileContentElement";

interface ProfileContentHourlyRateProps {
    hourlyRate: number;
	openEditionModal: (fieldToModify: string) => void
}

const ProfileContentHourlyRate: FunctionComponent<ProfileContentHourlyRateProps> = ({ openEditionModal, hourlyRate }) => {
	return <ProfileContentElement
		onPencilClick={() => openEditionModal('hourlyRate')}
		title={'Prix par heure'}
	>
		<div>
			{ hourlyRate }
		</div>
	</ProfileContentElement>

}

export default ProfileContentHourlyRate
