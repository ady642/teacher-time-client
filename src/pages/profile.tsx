import React, {FC} from 'react'

import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import BuildImage from "@/common/components/Images/BuildImage";
import styles from '@/modules/User/styles/profile.module.scss'

const Profile: FC = () => {
	return (
		<WhiteHeaderLayout className={styles['container']}>
			<div >
					Page en construction
				<BuildImage />
			</div>
		</WhiteHeaderLayout>
	)
}

export default Profile
