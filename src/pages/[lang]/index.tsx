import React, {FC} from 'react'
import Head from 'next/head'
import Image from 'next/image'

import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import useRoutePush from "@/common/hooks/useRoutePush";

import styles from '@/common/styles/WhiteHeader.module.scss'

const Home: FC = ({ localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
				className={`bg-home overflow-hidden ${styles.page}`}
			>
				<div className={`w-full h-5/6 text-white flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center md:p-14 p-4`}>
					<section className={'font-black tracking-wide lg:w-2/3'}>
						<div className={'md:text-4xl main-title text-2xl'}>
							{ localization.translations['teacherTimeWorld'] }
							<span className={'text-xl ml-2'}>🌍</span>
						</div>
						<div className={'md:text-md text-sm flex flex-col my-6'}>
							<span>
								{ localization.translations['startConv'] }
							</span>
							<span>
								{ localization.translations['teacherAnswer'] }
							</span>
						</div>
						<button onClick={goToTeachers} className={'bg-green-600 text-white flex justify-center hover:bg-green-800 transition-all md:w-auto w-full font-bold sm:text-ml text-md rounded sm:p-3 p-2'}>
							<span className={'mr-2'}>
								Appeler un professeur
							</span>
							<Image
								src={'/img/headphone.png'}
								alt={'headphone'}
								width={25}
								height={25}
							/>
						</button>
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
