import React, {FunctionComponent} from "react";
import dynamic from "next/dynamic";
import styles from '@/modules/Landing/homeStyles.module.scss'
import LandingLayout from "@/common/layouts/LandingLayout";
import Head from "next/head";

const ThreeComponent = dynamic(() => import('@/modules/Landing/Teacher/ThreeComponent'), {
	ssr: false
})

const LandingTeacher: FunctionComponent = () => {
	return <>
		<Head>
			<title>Teacher-time | Choice</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<LandingLayout>
			<section className={styles['landing__content']}>
				<ThreeComponent />
			</section>
		</LandingLayout>
	</>
}

export default LandingTeacher
