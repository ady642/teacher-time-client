import {FunctionComponent} from "react";
import {Logout} from "@material-ui/icons";
import UserProfileDropdownItem from "@/modules/User/components/UserProfileDropdown/UserProfileDropdownItem";

interface UserProfileDropdownListProps {
	onClick: (nameAction: string) => void;
	openedList: boolean;
}

const UserProfileDropdownList: FunctionComponent<UserProfileDropdownListProps> = ({ onClick, openedList }) => {
	return <div className={`${openedList ? 'inset-y-14' : '-inset-y-48'} h-12 flex flex-column items-center p-1 absolute -inset-x-4 transition-all bg-gray-100 rounded-md`}>
		<UserProfileDropdownItem onClick={() => onClick('logout')} icon={<Logout />} text={'Se déconnecter'} />
	</div>
}

export default UserProfileDropdownList
