import {FunctionComponent} from "react";
import userDropdownStyles from '@/modules/User/components/UserProfileDropdown/userDropdownStyles.module.scss'

interface UserProfileDropdownItemProps {
    icon: JSX.Element;
    text: string;
    onClick: () => void;
}

const UserProfileDropdownItem: FunctionComponent<UserProfileDropdownItemProps> = ({ text, icon, onClick }) => {
	return <div className={'flex w-full cursor-pointer whitespace-nowrap mb-3 transition hover:text-blueviolet'} onClick={() => onClick()}>
		<span className={userDropdownStyles.icon}>{ icon }</span>
		<span className={userDropdownStyles.text}>{text}</span>
	</div>
}

export default UserProfileDropdownItem
