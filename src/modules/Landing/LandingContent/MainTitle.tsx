import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import styles from '@/modules/Landing/homeStyles.module.scss'

interface MainTitleProps {

}

const MainTitle: FunctionComponent<MainTitleProps> = () => {
	const { t } = useTranslation()

	return <div className={styles['main-title']}>
		<span className={styles['main-title__title']}>
			{ t('landing.teacher.help') }
		</span>
		<span className={styles['main-title__subtitle-1']}>
			{ t('landing.teacher.students') }
		</span>
		<span className={styles['main-title__subtitle-2']}>
			{ t('landing.teacher.improveRevenues') }
		</span>
	</div>
}

export default MainTitle
