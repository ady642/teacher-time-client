import {FunctionComponent} from "react";
import Profile from "@/common/components/Icons/Profile";

interface UserProfileButtonProps {
	firstName: string;
	lastName: string;
	onClick: () => void
}

const UserProfileButton: FunctionComponent<UserProfileButtonProps> = ({ firstName, lastName, onClick }) => {
	return <div onClick={onClick} className={'flex items-center font-bold text-gray-800 px-3 py-1 hover:bg-blue-50 transition-all cursor-pointer rounded-3xl'}>
		<Profile />
		<span className="ml-2">
			{ firstName } { lastName }
		</span>
	</div>
}

export default UserProfileButton
