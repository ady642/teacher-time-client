import {FunctionComponent} from "react";
import styles from './banner.module.scss'
import useTranslation from "@/common/hooks/useTranslation";

interface BannerProps {
	studentCount: number;
	timeCount: number;
}

const Banner: FunctionComponent<BannerProps> = ({ studentCount, timeCount }) => {
	const { t } = useTranslation()

	return <div className={styles['banner']}>
		<h2 className={styles['banner__text']}>
			{ t('dashboard.home.banner.title', { studentCount, timeCount }) }
		</h2>
		<span className={styles['banner__polygon']}/>
		<img src={'/img/dashboard/bannerWoman.svg'} alt={'bannerWoman'} className={styles['banner__woman']} />
	</div>
}

export default Banner
