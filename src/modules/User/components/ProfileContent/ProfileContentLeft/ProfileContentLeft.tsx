import {FunctionComponent} from "react";
import ProfileContentName from "@/modules/User/components/ProfileContent/ProfileContentLeft/ProfileContentName";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";
import styles from '@/modules/User/components/ProfileContent/ProfileContentLeft/styles.module.scss'
import ProfileContentFields
	from "@/modules/User/components/ProfileContent/ProfileContentLeft/Fields/ProfileContentFields";
import ProfileContentLevels
	from "@/modules/User/components/ProfileContent/ProfileContentLeft/Levels/ProfileContentLevels";

interface ProfileContentLeftProps {
    teacher: Teacher;
	openEditionModal: (fieldToModify: string) => void
}

const ProfileContentLeft: FunctionComponent<ProfileContentLeftProps> = ({ teacher, openEditionModal }) => {
	return <div className={styles['profile-content-left']}>
		<ProfileContentName
			openEditionModal={openEditionModal}
			firstName={teacher?.user?.firstName}
			lastName={teacher?.user?.lastName}
		/>
		<ProfileContentFields openEditionModal={openEditionModal} fields={teacher?.fields ?? []}/>
		<ProfileContentLevels openEditionModal={openEditionModal} levels={teacher?.levels ?? []} />
	</div>
}

export default ProfileContentLeft
