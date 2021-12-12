import {FunctionComponent} from "react";
import styles from '@/modules/Landing/Teacher/HowItWorks/styles.module.scss'

interface HiwItemProps {
    index: number;
    imageSrc: string;
    text: string;
}

const HiwItem: FunctionComponent<HiwItemProps> = ({ index, imageSrc, text }) => {
	return <div className={styles['landing__hiw__item']}>
		<img src={imageSrc} alt={'hiw-item-image'}/>
		<div className={styles['landing__hiw__item__index']}>
			{ index }
		</div>
		<p className={styles['landing__hiw__item__text']}>
			{ text }
		</p>
	</div>
}

export default HiwItem
