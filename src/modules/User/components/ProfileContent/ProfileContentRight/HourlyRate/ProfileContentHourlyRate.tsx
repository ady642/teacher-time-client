import {FunctionComponent} from "react";
import ProfileContentElement from "@/modules/User/components/ProfileContent/ProfileContentElement";
import ProfileContentTitle from "@/modules/User/components/ProfileContent/ProfileContentTitle";

interface ProfileContentHourlyRateProps {
    hourlyRate: number
}

const ProfileContentHourlyRate: FunctionComponent<ProfileContentHourlyRateProps> = ({ hourlyRate }) => {
	return <>
		<ProfileContentElement>
			<ProfileContentTitle title={'Prix par heure'} />
		</ProfileContentElement>
		<div>
			{ hourlyRate }
		</div>
	</>
}

export default ProfileContentHourlyRate
