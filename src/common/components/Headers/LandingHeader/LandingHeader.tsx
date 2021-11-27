import React, {FunctionComponent} from "react";
import styles from '@/common/components/Headers/LandingHeader/headerStyles.module.scss'
import NavLinks from "@/common/components/Headers/LandingHeader/NavLinks/NavLinks";
import LogoText from "@/common/components/Logos/LogoText";
import LoginButton from "@/common/components/Headers/LandingHeader/LoginButton";

interface LandingHeaderProps {

}

const LandingHeader: FunctionComponent<LandingHeaderProps> = () => {
	return <div className={styles['landingHeader']}>
		<NavLinks />
		<LogoText />
		<LoginButton />
	</div>
}

export default LandingHeader
