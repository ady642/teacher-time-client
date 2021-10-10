import React, { FunctionComponent} from "react";
import styles from './ripple.module.scss'

interface RippleProps {
    children: JSX.Element;
    onClick?: Function;
}

const Ripple: FunctionComponent<RippleProps> = ({ children}) => {
	const createRipple = (event: { currentTarget: any; clientX: number; clientY: number; }) => {
		const rippleContainer = event.currentTarget;

		const circle = document.createElement('span');
		const diameter = Math.max(rippleContainer.clientWidth, rippleContainer.clientHeight);
		const radius = diameter / 2;

		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${event.clientX - rippleContainer.offsetLeft - radius}px`;
		circle.style.top = `${event.clientY - rippleContainer.offsetTop - radius}px`;
		circle.classList.add(styles['ripple']);

		const ripple = rippleContainer.getElementsByClassName(styles['ripple'])[0];

		if (ripple) {
			ripple.remove();
		}

		rippleContainer.appendChild(circle);
	}

	return <div className={styles['ripple-container']} onClick={createRipple}>{children}</div>;
};

export default Ripple
