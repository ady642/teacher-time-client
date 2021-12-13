import {FunctionComponent} from "react";
import styles from './openClassCardStyles.module.scss'
import OpenClassButton from "@/modules/Teachers/Dashboard/NavBar/OpenClassCard/OpenClassButton";
import useTranslation from "@/common/hooks/useTranslation";
import BackgroundEllipse from "@/common/components/Background/BackgroundEllipse";

interface OpenClassCardProps {

}

const OpenClassCard: FunctionComponent<OpenClassCardProps> = () => {
	const { t } = useTranslation()

	return <div className={styles['open-class-card']}>
		<BackgroundEllipse className={styles['open-class-card__ellipse-1']}/>
		<BackgroundEllipse className={styles['open-class-card__ellipse-2']}/>
		<BackgroundEllipse className={styles['open-class-card__ellipse-3']}/>
		<div className={styles['open-class-card__icon-container']}>
			<img
				src="/img/icon/femaleTeacher.svg"
				alt="femaleTeacherIcon"
				className={styles['open-class-card__icon']}
			/>
		</div>
		<div>
			<span className={styles['open-class-card__text']}>{ t('dashboard.openClass') }</span>
		</div>
		<OpenClassButton />
	</div>
}

export default OpenClassCard
