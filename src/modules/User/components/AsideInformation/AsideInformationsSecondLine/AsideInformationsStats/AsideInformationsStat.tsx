import {FunctionComponent} from "react";
import styles from '@/modules/User/styles/profile.module.scss'

interface AsideInformationsStatsProps {
	title: string;
	value: number;
}

const AsideInformationsStat: FunctionComponent<AsideInformationsStatsProps> = ({ title, value }) => {
	return <div className={styles['aside-information__stat']}>
		<span className={styles['aside-information__stat__title']}>
			{ title }
		</span>
		<span className={styles['aside-information__stat__number']}>
			{ value }
		</span>
	</div>
}

export default AsideInformationsStat
