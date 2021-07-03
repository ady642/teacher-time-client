import React, {FunctionComponent} from "react";
import WorkingWoman from "@/modules/home/components/Headband/WorkingWoman";
import useTranslation from "@/common/hooks/useTranslation";
import styles from "@/modules/home/styles/Home.module.scss"

interface HeadBandProps {
    goToTeachers: () => void
}

const HeadBand: FunctionComponent<HeadBandProps> = ({ goToTeachers }) => {
	const { t } = useTranslation()

	return <div className={`${styles.headBand} bg-blueviolet text-white flex justify-between items-center`}>
		<section className={styles.headBand__left}>
			<span className={`${styles.headBand__text} font-bold leading-relaxed`}>
				{ t('teacherTimeWorld') }
			</span>
			<button onClick={goToTeachers} className={`${styles.headBand__button} animate-pulse mt-5 bg-orange text-white flex justify-center hover:bg-red-700 transition-all font-bold rounded-3xl`}>
				<span className={`mr-2 capitalize `}>
					{ t('common.findAteacher') }
				</span>
			</button>
		</section>
		<section className={styles.headBand__image}>
			<WorkingWoman />
		</section>
	</div>
}

export default HeadBand
