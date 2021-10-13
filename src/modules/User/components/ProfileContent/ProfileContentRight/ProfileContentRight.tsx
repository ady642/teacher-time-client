import {FunctionComponent} from "react";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";
import ProfileContentHourlyRate
	from "@/modules/User/components/ProfileContent/ProfileContentRight/HourlyRate/ProfileContentHourlyRate";
import ProfileContentDescription
	from "@/modules/User/components/ProfileContent/ProfileContentRight/Description/ProfileContentDescription";
import styles from '@/modules/User/components/ProfileContent/ProfileContentRight/styles.module.scss'

interface ProfileContentRightProps {
    teacher: Teacher
}

const ProfileContentRight: FunctionComponent<ProfileContentRightProps> = ({ teacher }) => {
	return <div className={styles['profile-content-right']}>
		<ProfileContentHourlyRate hourlyRate={teacher.hourlyRate} />
		<ProfileContentDescription description={teacher.description} />
	</div>
}

export default ProfileContentRight
