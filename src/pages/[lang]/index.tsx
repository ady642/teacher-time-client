import React, {FC} from 'react'
import Head from 'next/head'

import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import useRoutePush from "@/common/hooks/useRoutePush";

import styles from '@/common/styles/WhiteHeader.module.scss'
import Draw1 from '@/modules/home/components/Draw1';
import Draw2 from '@/modules/home/components/Draw2';
import HomeButton from '@/modules/home/components/HomeButton';
import Draw3 from '@/modules/home/components/Draw3';
import HeadBand from "@/modules/home/components/Headband/HeadBand";
import TextEnd from "@/modules/home/components/TextEnd/TextEnd";
import TextDraw1 from "@/modules/home/components/TextDraws/TextDraw1";
import TextDraw2 from "@/modules/home/components/TextDraws/TextDraw2";
import TextDraw3 from "@/modules/home/components/TextDraws/TextDraw3";

const Home: FC = ({ localization }: InferGetServerSidePropsType<typeof getServerSideProps>,) => {
	const { goTo } = useRoutePush()

	const goToTeachers = async () => {
		await goTo(localization.locale, 'teachers')
	}

	return (
		<LanguageProvider localization={localization}>
			<Head>
				<title>Teacher-time</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<WhiteHeaderLayout
				locale={localization.locale}
				className={`${styles.page}`}
			>
				<HeadBand goToTeachers={goToTeachers} />
				<div style={{ height: '75vh' }} className={`w-full  bg-white flew-wrap  `}>
					<section className={'overflow-hidden'} >
						<div className="lg:px-20 md:px-10 px-5">
							<TextDraw1 />
							<TextDraw2 />
							<TextDraw3 />
						</div>
						<TextEnd />
					</section>
				</div>
			</WhiteHeaderLayout>
		</LanguageProvider>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const localization = getLocalizationProps(ctx, "home");

	return { props: { localization } }
}

export default Home
