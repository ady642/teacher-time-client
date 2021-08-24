import {FunctionComponent} from "react";
import userDropdownStyles from '@/modules/User/components/UserProfileDropdown/userDropdownStyles.module.scss'

interface UserProfileDropdownItemProps {
    icon: JSX.Element;
    text: string;
    onClick: () => void;
}

const UserProfileDropdownItem: FunctionComponent<UserProfileDropdownItemProps> = ({ text, icon, onClick }) => {
	return <div className={'flex cursor-pointer'} onClick={() => onClick()}>
		{ icon }
		<span className={userDropdownStyles.text}>{text}</span>
	</div>
}

export default UserProfileDropdownItem
