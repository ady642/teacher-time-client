import {FunctionComponent} from "react";
import NavBarItem from "@/modules/Teachers/Dashboard/NavBar/NavBarItems/NavBarItem";
import useRoutePush from "@/common/hooks/useRoutePush";

interface MessagesItemProps {

}

const MessagesItem: FunctionComponent<MessagesItemProps> = () => {
	const { goTo } = useRoutePush()

	const goToMessages = () => {
		goTo('teachers/dashboard/messages')
	}

	return <NavBarItem
		title={'Messages'}
		iconSrc={'messages.svg'}
		onClick={goToMessages}
	/>
}

export default MessagesItem
