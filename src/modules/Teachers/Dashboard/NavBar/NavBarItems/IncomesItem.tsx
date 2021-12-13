import {FunctionComponent} from "react";
import NavBarItem from "@/modules/Teachers/Dashboard/NavBar/NavBarItems/NavBarItem";
import useRoutePush from "@/common/hooks/useRoutePush";

interface IncomesItemProps {

}

const IncomesItem: FunctionComponent<IncomesItemProps> = () => {
	const { goTo } = useRoutePush()

	const goToIncomes = () => {
		goTo('teachers/dashboard/incomes')
	}

	return <NavBarItem
		title={'Revenues'}
		iconSrc={'stats.svg'}
		onClick={goToIncomes}
	/>
}

export default IncomesItem
