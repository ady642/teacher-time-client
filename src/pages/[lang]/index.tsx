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
				className={`${styles.page}`}
			>
				<div style={{ height: 'calc(100% - 80px)' }} className={`w-full overflow-hidden bg-blueviolet text-white flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center md:p-36 p-4`}>
					<section>
						<div className={'leading-4 md:text-4xl text-2xl mb-4'}>
							{ localization.translations['teacherTimeWorld'] }
						</div>
						<button onClick={goToTeachers} className={'bg-orange text-white flex justify-center hover:bg-red-700 transition-all md:w-auto w-full font-bold sm:text-ml text-md rounded-3xl sm:px-6 sm:p-3 p-2'}>
							<span className={'mr-2 capitalize'}>
								{ localization.translations.common['findAteacher'] }
							</span>
						</button>
					</section>
					<section className={'ml-3'}>
						<Image
							src={'/img/home/girl.png'}
							alt={'working woman'}
							width={1800}
							height={1250}
						/>
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
