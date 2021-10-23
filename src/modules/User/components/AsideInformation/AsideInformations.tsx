import {FunctionComponent} from "react";
import AsideInformationsFirstLine
	from "@/modules/User/components/AsideInformation/AsideInformationsFirstLine/AsideInformationsFirstLine";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";
import AsideInformationsSecondLine
	from "@/modules/User/components/AsideInformation/AsideInformationsSecondLine/AsideInformationsSecondLine";
import styles from '@/modules/User/styles/profile.module.scss'
import AsideInformationsThirdLine
	from "@/modules/User/components/AsideInformation/AsideInformationsThirdLine/AsideInformationsThirdLine";

interface AsideInformationsProps {
	teacher: Teacher
}

const AsideInformations: FunctionComponent<AsideInformationsProps> = ({ teacher }) => {
	return <div className={styles['aside-information']}>
		<AsideInformationsFirstLine teacher={teacher}/>
		<AsideInformationsSecondLine />
		<AsideInformationsThirdLine />
	</div>
}

export default AsideInformations
