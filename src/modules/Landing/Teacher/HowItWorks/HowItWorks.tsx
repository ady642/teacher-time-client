import React, {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import styles from '@/modules/Landing/Teacher/HowItWorks/styles.module.scss'
import RegisterItem from "@/modules/Landing/Teacher/HowItWorks/Items/RegisterItem";
import StudentContactItem from "@/modules/Landing/Teacher/HowItWorks/Items/StudentContactItem";
import EarnItem from "@/modules/Landing/Teacher/HowItWorks/Items/EarnItem";

interface HowItWorksProps {

}

const HowItWorks: FunctionComponent<HowItWorksProps> = () => {
	const { t } = useTranslation()

	return <div className={styles['landing__hiw__container']}>
		<h1 className={styles['landing__hiw__title']}>{ t('landing.hiw.title') }</h1>
		<div className={styles['landing__hiw__items']}>
			<RegisterItem />
			<StudentContactItem />
			<EarnItem />
		</div>
	</div>
}

export default HowItWorks
