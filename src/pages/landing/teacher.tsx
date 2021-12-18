import React, {FunctionComponent} from "react";
import styles from '@/modules/Landing/homeStyles.module.scss'
import LandingLayout from "@/common/layouts/LandingLayout";
import Head from "next/head";
import HowItWorks from "@/modules/Landing/Teacher/HowItWorks/HowItWorks";
import LandingContentLeft from "@/modules/Landing/Teacher/LandingContent/LandingContentLeft";
import Image from "next/image"

const LandingTeacher: FunctionComponent = () => {
	return <>
		<Head>
			<title>Teacher-time | Landing Teacher</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<LandingLayout>
			<section className={styles['landing__content']}>
				<LandingContentLeft />
				<div className={'w-4/5 relative'}>
					<Image src={'/img/home/teacherBoard.svg'} layout={"fill"}/>
				</div>
			</section>
			<section id={'hiw'} className={styles['landing__hiw']}>
				<HowItWorks />
			</section>
		</LandingLayout>
	</>
}

export default LandingTeacher
