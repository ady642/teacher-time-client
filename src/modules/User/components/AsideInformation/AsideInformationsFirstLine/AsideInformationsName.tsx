import {FunctionComponent} from "react";
import styles from '@/modules/User/styles/profile.module.scss'

interface AsideInformationsNameProps {
    firstName: string;
    lastName: string;
}

const AsideInformationsName: FunctionComponent<AsideInformationsNameProps> = ({ lastName, firstName }) => {
	return <span className={styles['name']}>
		{ firstName } { lastName }
	</span>
}

export default AsideInformationsName
