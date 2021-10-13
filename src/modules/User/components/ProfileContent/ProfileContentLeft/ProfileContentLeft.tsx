import {FunctionComponent} from "react";
import ProfileContentName from "@/modules/User/components/ProfileContent/ProfileContentLeft/ProfileContentName";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";
import ProfileContentCertificate
	from "@/modules/User/components/ProfileContent/ProfileContentLeft/ProfileContentCertificate";
import styles from '@/modules/User/components/ProfileContent/ProfileContentLeft/styles.module.scss'
import ProfileContentFields
	from "@/modules/User/components/ProfileContent/ProfileContentLeft/Fields/ProfileContentFields";
import ProfileContentLevels
	from "@/modules/User/components/ProfileContent/ProfileContentLeft/Levels/ProfileContentLevels";

interface ProfileContentLeftProps {
    teacher: Teacher
}

const ProfileContentLeft: FunctionComponent<ProfileContentLeftProps> = ({ teacher }) => {
	return <div className={styles['profile-content-left']}>
		<ProfileContentName firstName={teacher.user.firstName} lastName={teacher.user.lastName} />
		<ProfileContentCertificate />
		<ProfileContentFields fields={teacher.fields}/>
		<ProfileContentLevels levels={teacher.levels} />
	</div>
}

export default ProfileContentLeft
