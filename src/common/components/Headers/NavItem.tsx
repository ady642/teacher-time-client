import React, {FunctionComponent} from "react";

interface NavItemProps {
    onClick: () => void;
    children: any;
}

const NavItem: FunctionComponent<NavItemProps> = ({ onClick, children}) => {
	return <li onClick={onClick} className={`cursor-pointer capitalize hover:text-green-500 transition lg:ml-6 lg:mr-0 ml-0 mr-1`}>
		{ children }
	</li>
}

export default NavItem
