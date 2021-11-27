import {FunctionComponent} from "react";
import styles from '@/modules/Landing/homeStyles.module.scss'

interface InfoAsideProps {
	icon: string;
	title: string;
	subtitle: string;
}

const InfoAside: FunctionComponent<InfoAsideProps> = ({ icon, title, subtitle }) => {
	return <div className={styles['info-aside']}>
		<div className={styles['info-aside__icon__container']}>
			<img
				src={`/img/icon/${icon}.svg`}
				alt={'icon-aside'}
				className={styles['info-aside__icon']}
			/>
		</div>
		<div className={styles['info-aside__texts']}>
			<span className={styles['info-aside__texts__title']}>
				{ title }
			</span>
			<span className={styles['info-aside__texts__subtitle']}>
				{ subtitle }
			</span>
		</div>
	</div>
}

export default InfoAside
