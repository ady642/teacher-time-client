import {FunctionComponent} from "react";
import styles from './navBarItemStyle.module.scss'

interface NavBarItemProps {
    title: string;
    iconSrc: string;
	onClick: () => void
}

const NavBarItem: FunctionComponent<NavBarItemProps> = ({ iconSrc, title, onClick }) => {
	return <div onClick={() => onClick()} className={styles['nav-bar__item']}>
		<div className={styles['nav-bar__item__icon__container']}>
			<img
				className={styles['nav-bar__item__icon']}
				src={`/img/icon/${iconSrc}`}
				alt={'navbar-item__icon'}
			/>
		</div>
		<span className={styles['nav-bar__item__title']}>
			{ title }
		</span>
	</div>
}

export default NavBarItem
