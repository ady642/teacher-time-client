import {FunctionComponent} from "react";
import NavBarItem from "@/modules/Teachers/Dashboard/NavBar/NavBarItems/NavBarItem";
import useRoutePush from "@/common/hooks/useRoutePush";

interface HomeItemProps {

}

const HomeItem: FunctionComponent<HomeItemProps> = () => {
	const { goTo } = useRoutePush()

	const goToHome = () => {
		goTo('teachers/dashboard')
	}

	return <NavBarItem
		title={'Home'}
		iconSrc={'home.svg'}
		onClick={goToHome}
	/>
}

export default HomeItem
