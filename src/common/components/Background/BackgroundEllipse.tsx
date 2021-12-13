import {FunctionComponent} from "react";
import styles from '@/common/components/Background/styles.module.scss'
import classNames from "classnames";

interface BackgroundEllipseProps {
	className?: string
}

const BackgroundEllipse: FunctionComponent<BackgroundEllipseProps> = ({ className }) => {
	const classes = classNames([className, styles['background-ellipse']])

	return <div className={classes}/>
}

export default BackgroundEllipse
