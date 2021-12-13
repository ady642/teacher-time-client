import {FunctionComponent} from "react";
import styles from "./navBarItemStyle.module.scss"
import HomeItem from "@/modules/Teachers/Dashboard/NavBar/NavBarItems/HomeItem";
import ProfileItem from "@/modules/Teachers/Dashboard/NavBar/NavBarItems/ProfileItem";
import MessagesItem from "@/modules/Teachers/Dashboard/NavBar/NavBarItems/MessagesItem";
import IncomesItem from "@/modules/Teachers/Dashboard/NavBar/NavBarItems/IncomesItem";

interface NavBarItemsProps {

}

const NavBarItems: FunctionComponent<NavBarItemsProps> = () => {
	return <div className={styles['nav-bar__items']}>
		<HomeItem />
		<ProfileItem />
		<MessagesItem />
		<IncomesItem />
	</div>
}

export default NavBarItems
