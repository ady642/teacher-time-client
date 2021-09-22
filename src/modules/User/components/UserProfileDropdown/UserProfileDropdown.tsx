import {FunctionComponent, useRef, useState} from "react";
import UserProfileButton from "@/modules/User/components/UserProfileDropdown/UserProfileButton";
import UserProfileDropdownList from "@/modules/User/components/UserProfileDropdown/UserProfileDropdownList";
import useAuthReducers from "@/context/auth/helpers/useAuthReducers";
import useClickOutside from "@/common/hooks/useClickOutside";
import useRoomManagement from "@/modules/Room/hooks/useRoomManagement";

interface UserProfileDropdownProps {
	firstName: string;
	lastName: string;
}

const UserProfileDropdown: FunctionComponent<UserProfileDropdownProps> = ({ firstName, lastName }) => {
	const [openedList, setOpenedList] = useState(false)

	const { resetToken } = useAuthReducers()
	const DDref = useRef<HTMLDivElement>(null)
	useClickOutside([DDref], () => setOpenedList(false))
	
	const { deleteRoom } = useRoomManagement()

	const logout = () => {
		resetToken()
		deleteRoom()
	}

	const onItemClick = (nameAction: string) => {
		switch(nameAction) {
		case 'logout':
			logout()
			break
		default:
			console.warn('this action is not supported')
		}
	}

	return <div ref={DDref} className={"relative"}>
		<UserProfileButton onClick={() => setOpenedList(!openedList)} firstName={firstName} lastName={lastName} />
		<UserProfileDropdownList openedList={openedList} onClick={onItemClick}/>
	</div>
}

export default UserProfileDropdown