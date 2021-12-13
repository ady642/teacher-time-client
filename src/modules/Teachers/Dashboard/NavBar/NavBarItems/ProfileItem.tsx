import {FunctionComponent} from "react";
import NavBarItem from "@/modules/Teachers/Dashboard/NavBar/NavBarItems/NavBarItem";
import useRoutePush from "@/common/hooks/useRoutePush";

interface ProfileItemProps {

}

const ProfileItem: FunctionComponent<ProfileItemProps> = () => {
	const { goTo } = useRoutePush()

	const goToProfile = () => {
		goTo('teachers/dashboard/profile')
	}

	return <NavBarItem
		title={'Profile'}
		iconSrc={'settings.svg'}
		onClick={goToProfile}
	/>
}

export default ProfileItem
