import {FunctionComponent} from "react";
import styles from "@/modules/Landing/homeStyles.module.scss";
import MainTitle from "@/modules/Landing/LandingContent/MainTitle";
import RegistrationButton from "@/modules/Landing/LandingContent/RegistrationButton";
import InfoAsides from "@/modules/Landing/LandingContent/InfoAsides/InfoAsides";

interface LandingContentLeftProps {

}

const LandingContentLeft: FunctionComponent<LandingContentLeftProps> = () => {
	const register = () => {
		console.log('test')
	}

	return <div className={styles['landing__left']}>
		<div/>
		<div className={styles['landing-left__up']}>
			<MainTitle />
			<RegistrationButton onClick={register} />
		</div>
		<InfoAsides />
	</div>
}

export default LandingContentLeft
