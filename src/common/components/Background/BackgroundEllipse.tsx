import {FunctionComponent} from "react";
import styles from '@/common/components/Background/styles.module.scss'

interface BackgroundEllipseProps {

}

const BackgroundEllipse: FunctionComponent<BackgroundEllipseProps> = () => {
	return <div className={styles['background-ellipse']}/>
}

export default BackgroundEllipse
