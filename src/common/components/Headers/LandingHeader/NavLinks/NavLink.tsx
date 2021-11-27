import {FunctionComponent} from "react";
import styles from '@/common/components/Headers/LandingHeader/headerStyles.module.scss'
import classNames from "classnames";

interface NavLinkProps {
    title: string;
    onClick: () => void;
	isActive: boolean;
}

const NavLink: FunctionComponent<NavLinkProps> = ({ title, onClick, isActive }) => {
	const classes = classNames(
		styles['landingHeader__navLink'],
		{ [styles['landingHeader__navLinkActive']]: isActive }
	)

	return <div
		onClick={onClick}
		className={classes}
	>
		{ title }
	</div>
}

export default NavLink
