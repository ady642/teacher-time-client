import React, {FC} from 'react'

import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import styles from '@/modules/User/styles/profile.module.scss'
import AsideInformations from "@/modules/User/components/AsideInformation/AsideInformations";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import ProfileContent from "@/modules/User/components/ProfileContent/ProfileContent";

const Profile: FC = () => {
	const { teacher } = useUserGetters()

	return (
		<WhiteHeaderLayout className={styles['container']}>
			{ teacher && <div className={styles['content']}>
				<AsideInformations teacher={teacher} />
				<ProfileContent teacher={teacher} />
			</div> }
		</WhiteHeaderLayout>
	)
}

export default Profile
