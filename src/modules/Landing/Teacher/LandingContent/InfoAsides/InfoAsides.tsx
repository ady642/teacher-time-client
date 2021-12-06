import {FunctionComponent} from "react";
import InstantInfo from "@/modules/Landing/Teacher/LandingContent/InfoAsides/InstantInfo";
import AdditionalIncomeInfo from "@/modules/Landing/Teacher/LandingContent/InfoAsides/AdditionalIncomeInfo";
import styles from "@/modules/Landing/homeStyles.module.scss";

interface InfoAsideProps {

}

const InfoAsides: FunctionComponent<InfoAsideProps> = () => {
	return <div className={styles['info-asides']}>
		<InstantInfo />
		<AdditionalIncomeInfo />
	</div>
}

export default InfoAsides
