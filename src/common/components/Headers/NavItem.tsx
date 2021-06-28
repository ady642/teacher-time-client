import React, {FunctionComponent} from "react";

interface NavItemProps {
    onClick: () => void;
    children: any;
	margin:any
}

const NavItem: FunctionComponent<NavItemProps> = ({ onClick, children ,margin}) => {
	return <li onClick={onClick} style={{marginRight: margin + 'vw'}} className={'cursor-pointer capitalize hover:text-green-500 transition'}>
		{ children }
	</li>
}

export default NavItem
