import {FunctionComponent} from "react";
import styles from "@/modules/Landing/homeStyles.module.scss";
import MainTitle from "@/modules/Landing/Teacher/LandingContent/MainTitle";
import RegistrationButton from "@/modules/Landing/Teacher/LandingContent/RegistrationButton";
import useRoutePush from "@/common/hooks/useRoutePush";
import ScrollButton from "@/modules/Landing/Teacher/LandingContent/ScrollButton/ScrollButton";

interface LandingContentLeftProps {

}

const LandingContentLeft: FunctionComponent<LandingContentLeftProps> = () => {
	const { goTo } = useRoutePush()

	const register = () => {
		goTo('teachers/create')
	}

	return <div className={styles['landing__left']}>
		<div/>
		<div className={styles['landing-left__up']}>
			<MainTitle />
			<RegistrationButton onClick={register} />
		</div>
		<ScrollButton />
	</div>
}

export default LandingContentLeft
