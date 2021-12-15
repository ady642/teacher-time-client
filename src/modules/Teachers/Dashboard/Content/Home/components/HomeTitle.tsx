import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import WavingHand from "@/common/components/Icons/WavingHand";
import styles from './homeTitleStyles.module.scss'

interface HomeTitleProps {
	teacherName: string;
}

const HomeTitle: FunctionComponent<HomeTitleProps> = ({ teacherName }) => {
	const { t } = useTranslation()

	return <div className={styles['home-title']}>
		<h1 className={styles['title']}>
			{ t('dashboard.home.title') } { teacherName }
		</h1>
		<WavingHand className={styles['icon']} />
	</div>
}

export default HomeTitle
