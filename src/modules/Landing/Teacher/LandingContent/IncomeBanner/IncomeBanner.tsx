import {FunctionComponent} from "react";
import styles from './incomeBannerStyles.module.scss'

interface IncomeBannerProps {

}

const IncomeBanner: FunctionComponent<IncomeBannerProps> = () => {
	return <div className={styles['income-banner']}>
		<span className={styles['income-banner__circle']} />
		<span className={styles['income-banner__content']}>5€ / 15min</span>
	</div>
}

export default IncomeBanner
