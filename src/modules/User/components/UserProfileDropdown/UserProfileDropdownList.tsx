import {FunctionComponent} from "react";
import {Logout} from "@material-ui/icons";
import UserProfileDropdownItem from "@/modules/User/components/UserProfileDropdown/UserProfileDropdownItem";
import ProfileLittle from "@/common/components/Icons/ProfileLittle";
import LocaleSwitcherList from "@/modules/User/components/LocaleSwitcher/LocaleSwitcherList";

interface UserProfileDropdownListProps {
	onClick: (nameAction: string) => void;
	openedList: boolean;
}

const UserProfileDropdownList: FunctionComponent<UserProfileDropdownListProps> = ({ onClick, openedList }) => {
	return <div className={`${openedList ? 'inset-y-14' : '-inset-y-48'} h-28 flex flex-col right-0 items-center px-8 py-2 absolute transition-all bg-gray-100 rounded-md`}>
		<UserProfileDropdownItem onClick={() => onClick('logout')} icon={<Logout />} text={'Se déconnecter'} />
		<UserProfileDropdownItem onClick={() => onClick('goToProfile')} icon={<ProfileLittle />} text={'Profil'} />
		<LocaleSwitcherList />
	</div>
}

export default UserProfileDropdownList
