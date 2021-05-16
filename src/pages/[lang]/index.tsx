import React, {FC, useEffect} from 'react'
import Head from 'next/head'

import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import LogoBook from "@/common/components/Logos/LogoBook";
import useRoutePush from "@/common/hooks/useRoutePush";
import {socket} from "@/common/utils/client";
import useAppReducers from "@/context/app/helpers/useAppReducers";

const Home: FC = ({ localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { goTo } = useRoutePush()
	const { setAppLoading } = useAppReducers()

	const callTeacher = async () => {
		await socket.emit('join-intent')
		setAppLoading(true)
	}

	useEffect(() => {
		socket.on('on-accepted', async ({roomID = '', teacherID = '' }) => {
			await goTo(localization.locale, `room/${roomID}`, { teacherID })
			setAppLoading(false)
		})
		socket.on('on-rejected', () => alert('rejected'))
	}, [])

	return (
		<LanguageProvider localization={localization}>
			<Head>
				<title>Teacher-time</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<WhiteHeaderLayout
				locale={localization.locale}
			>
				<div className={`w-full h-full flex md:flex-row flex-col justify-between items-center md:p-14 p-4`} style={{backgroundColor: '#F9F8FD'}}>
					<section className={'font-black tracking-wide text-gray-500 md:w-2/3'}>
						<div className={'md:text-5xl text-3xl text-gray-800'}>
							{ localization.translations['teacherTimeWorld'] }<br/>
							{ localization.translations['allWorld'] }
							<span className={'text-4xl ml-2'}>🌍</span>
						</div>
						<div className={'md:text-3xl text-xl my-6'}>
							{ localization.translations['teacherTimeDesc'] }
						</div>
						<button onClick={callTeacher} className={'bg-green-500 text-white font-bold text-2xl rounded-lg p-5'}>
							{ localization.translations['callTeacher'] } 🚀
						</button>
					</section>
					<section className={'mr-16'}>
						<LogoBook width={300} height={300}/>
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
