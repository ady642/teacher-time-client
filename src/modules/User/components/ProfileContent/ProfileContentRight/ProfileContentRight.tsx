import {FunctionComponent} from "react";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";
import ProfileContentHourlyRate
	from "@/modules/User/components/ProfileContent/ProfileContentRight/HourlyRate/ProfileContentHourlyRate";
import ProfileContentDescription
	from "@/modules/User/components/ProfileContent/ProfileContentRight/Description/ProfileContentDescription";
import styles from '@/modules/User/components/ProfileContent/ProfileContentRight/styles.module.scss'

interface ProfileContentRightProps {
    teacher: Teacher;
	openEditionModal: (fieldToModify: string) => void
}

const ProfileContentRight: FunctionComponent<ProfileContentRightProps> = ({ openEditionModal, teacher }) => {
	return <div className={styles['profile-content-right']}>
		<ProfileContentHourlyRate openEditionModal={openEditionModal} hourlyRate={teacher.hourlyRate} />
		<ProfileContentDescription openEditionModal={openEditionModal} description={teacher.description} />
	</div>
}

export default ProfileContentRight
