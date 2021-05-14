import React, {FC} from 'react'
import Head from 'next/head'

import {useRouter} from "next/router";
import DefaultLayout from "@/common/layouts/DefaultLayout";
import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import LogoBook from "@/common/components/Logos/LogoBook";

const Home: FC = ({ localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const router = useRouter()

	return (
		<LanguageProvider localization={localization}>
			<Head>
				<title>Teacher-time</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<WhiteHeaderLayout
				locale={localization.locale}
			>
				<div className={`w-full h-full flex justify-between items-center p-14`} style={{backgroundColor: '#F9F8FD'}}>
					<section className={'font-black tracking-wide text-gray-500 w-2/3'}>
						<div className={'text-5xl text-gray-800'}>
							{ localization.translations.common['teacherTimeWorld'] } <span className={'text-4xl'}>🌍</span>
						</div>
						<div className={'text-3xl my-6'}>
							{ localization.translations.common['teacherTimeDesc'] }
						</div>
						<button className={'bg-green-500 text-white font-bold text-2xl rounded-lg p-5'}>
							{ localization.translations.common['login'] } 🚀
						</button>
					</section>
					<section className={'mr-16'}>
						<LogoBook width={350} height={350}/>
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
