import {FunctionComponent} from "react";
import dynamic from "next/dynamic";
import styles from '@/modules/Landing/homeStyles.module.scss'
import LandingContentLeft from "@/modules/Landing/Teacher/LandingContent/LandingContentLeft";
import BackgroundEllipse from "@/common/components/Background/BackgroundEllipse";
import LandingLayout from "@/common/layouts/LandingLayout";

const ThreeComponent = dynamic(() => import('@/modules/Landing/Teacher/ThreeComponent'), {
	ssr: false
})


interface threeProps {

}

const LandingTeacher: FunctionComponent<threeProps> = () => {
	return <LandingLayout>
		<BackgroundEllipse />
		<section className={styles['landing__content']}>
			<LandingContentLeft />
			<ThreeComponent />
		</section>
	</LandingLayout>
}

export default LandingTeacher
