import {FunctionComponent} from "react";
import AsideInformationsRating
	from "@/modules/User/components/AsideInformation/AsideInformationsSecondLine/AsideInformationsRating";
import AsideInformationsStats
	from "@/modules/User/components/AsideInformation/AsideInformationsSecondLine/AsideInformationsStats/AsideInformationsStats";
import styles from '@/modules/User/styles/profile.module.scss'

interface AsideInformationsSecondLineProps {

}

const AsideInformationsSecondLine: FunctionComponent<AsideInformationsSecondLineProps> = () => {
	return <div className={styles['asideInformation__secondLine']}>
		<AsideInformationsRating />
		<AsideInformationsStats />
	</div>
}

export default AsideInformationsSecondLine
