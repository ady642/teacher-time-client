import React, {FunctionComponent} from "react";
import dynamic from "next/dynamic";
import styles from '@/modules/Landing/homeStyles.module.scss'
import LandingLayout from "@/common/layouts/LandingLayout";
import Head from "next/head";
import HowItWorks from "@/modules/Landing/Teacher/HowItWorks/HowItWorks";
import LandingContentLeft from "@/modules/Landing/Teacher/LandingContent/LandingContentLeft";

const ThreeComponent = dynamic(() => import('@/modules/Landing/Teacher/ThreeComponent'), {
	ssr: false
})

const LandingTeacher: FunctionComponent = () => {
	return <>
		<Head>
			<title>Teacher-time | Landing Teacher</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<LandingLayout>
			<section className={styles['landing__content']}>
				<LandingContentLeft />
			</section>
			<section id={'hiw'} className={styles['landing__hiw']}>
				<HowItWorks />
			</section>
		</LandingLayout>
	</>
}

export default LandingTeacher