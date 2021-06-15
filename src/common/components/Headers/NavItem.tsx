import React, {FunctionComponent} from "react";

interface NavItemProps {
    onClick: () => void;
    children: any
}

const NavItem: FunctionComponent<NavItemProps> = ({ onClick, children }) => {
	return <li onClick={onClick} className={'mr-10 cursor-pointer capitalize hover:text-green-500 transition'}>
		{ children }
	</li>
}

export default NavItem
