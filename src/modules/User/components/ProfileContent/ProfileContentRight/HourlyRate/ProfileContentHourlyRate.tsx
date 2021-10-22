import {FunctionComponent} from "react";
import ProfileContentElement from "@/modules/User/components/ProfileContent/ProfileContentElement";
import Tag from "@/common/components/Tags/Tag";

interface ProfileContentHourlyRateProps {
    hourlyRate: number;
	openEditionModal: (fieldToModify: string) => void
}

const ProfileContentHourlyRate: FunctionComponent<ProfileContentHourlyRateProps> = ({ openEditionModal, hourlyRate }) => {
	return <ProfileContentElement
		onPencilClick={() => openEditionModal('hourlyRate')}
		title={'Prix par heure'}
	>
		<Tag>
			{ hourlyRate } €
		</Tag>
	</ProfileContentElement>

}

export default ProfileContentHourlyRate
