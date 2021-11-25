import {FunctionComponent} from "react";
import dynamic from "next/dynamic";
import styles from '@/modules/Landing/homeStyles.module.scss'
import LandingContentLeft from "@/modules/Landing/LandingContent/LandingContentLeft";
import BackgroundEllipse from "@/common/components/Background/BackgroundEllipse";

const ThreeComponent = dynamic(() => import('@/modules/Landing/ChooseBetweenTeacherAndStudent/ThreeComponent'), {
	ssr: false
})


interface threeProps {

}

const Three: FunctionComponent<threeProps> = () => {
	return <div className={styles['landing__container']}>
		<BackgroundEllipse />
		<header className={styles['landing__header']}>My Header</header>
		<section className={styles['landing__content']}>
			<LandingContentLeft />
			<ThreeComponent />
		</section>
	</div>
}

export default Three
