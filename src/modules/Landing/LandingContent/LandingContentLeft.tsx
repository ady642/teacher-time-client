import {FunctionComponent} from "react";
import styles from "@/modules/Landing/homeStyles.module.scss";
import MainTitle from "@/modules/Landing/LandingContent/MainTitle";
import RegistrationButton from "@/modules/Landing/LandingContent/RegistrationButton";
import InfoAside from "@/modules/Landing/LandingContent/InfoAside";

interface LandingContentLeftProps {

}

const LandingContentLeft: FunctionComponent<LandingContentLeftProps> = () => {
	const register = () => {
		console.log('test')
	}

	return <div className={styles['landing_left']}>
		<MainTitle />
		<RegistrationButton onClick={register} />
		<InfoAside />
	</div>
}

export default LandingContentLeft
