import React, {FunctionComponent} from "react";
import WorkingWoman from "@/modules/home/components/Headband/WorkingWoman";
import useTranslation from "@/common/hooks/useTranslation";
import styles from "@/modules/home/styles/Home.module.scss"
import TailwindButton from "@/common/components/Buttons/TailwindButton";

interface HeadBandProps {
    goToTeachers: () => void
}

const HeadBand: FunctionComponent<HeadBandProps> = ({ goToTeachers }) => {
	const { t } = useTranslation()

	return <div className={`${styles.headBand} bg-white text-black flex justify-between items-center`}>
		<section className={styles.headBand__left}>
			<span className={`${styles.headBand__text} font-bold leading-relaxed`}>
				{ t('teacherTimeWorld') }
			</span>
			<span className={`${styles.headBand__text__subhead}`}>
				{ t('freeCall') }
			</span>
			<TailwindButton onClick={goToTeachers} className={`${styles.headBand__button} animate-pulse mt-5 text-white flex justify-center transition-all font-bold`}>
				<span className={`mr-2 capitalize `}>
					{ t('common.findAteacher') }
				</span>
			</TailwindButton>
		</section>
		<section className={styles.headBand__image}>
			<WorkingWoman />
		</section>
	</div>
}

export default HeadBand
