import {FunctionComponent} from "react";
import styles from '@/modules/User/components/ProfileContent/styles.module.scss'

interface ProfileContentTitleProps {
    title: string
}

const ProfileContentTitle: FunctionComponent<ProfileContentTitleProps> = ({ title }) => {
	return <h1 className={styles['profile-content-title']}>
		{ title }
	</h1>
}

export default ProfileContentTitle
