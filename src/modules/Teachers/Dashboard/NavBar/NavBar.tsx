import {FunctionComponent} from "react";
import LogoText from "@/common/components/Logos/LogoText";
import NavBarItems from "@/modules/Teachers/Dashboard/NavBar/NavBarItems/NavBarItems";
import styles from './navBarStyle.module.scss'
import OpenClassCard from "@/modules/Teachers/Dashboard/NavBar/OpenClassCard/OpenClassCard";

interface NavBarProps {

}

const NavBar: FunctionComponent<NavBarProps> = () => {
	return <div className={styles['nav-bar']}>
		<div>
			<LogoText width={300} height={100} />
			<NavBarItems />
		</div>
		<OpenClassCard />
	</div>
}

export default NavBar
