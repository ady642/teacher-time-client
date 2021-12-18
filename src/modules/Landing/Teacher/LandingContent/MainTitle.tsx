import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import styles from '@/modules/Landing/homeStyles.module.scss'
import IncomeBanner from "@/modules/Landing/Teacher/LandingContent/IncomeBanner/IncomeBanner";

interface MainTitleProps {

}

const MainTitle: FunctionComponent<MainTitleProps> = () => {
	const { t } = useTranslation()

	return <div className={styles['main-title']}>
		<div className={styles['main-title__titles']}>
			<span className={styles['main-title__title']}>
				{ t('landing.teacher.help') }
			</span>
			<IncomeBanner />
		</div>
		<span className={styles['main-title__subtitle-1']}>
			{ t('landing.teacher.students') }
		</span>
		<span className={styles['main-title__subtitle-2']}>
			{ t('landing.teacher.improveRevenues') }
		</span>
	</div>
}

export default MainTitle
