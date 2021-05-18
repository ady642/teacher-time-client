import React, {FC, useEffect} from 'react'
import Head from 'next/head'

import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
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
				<div className={`w-full bg-transparent h-full bg-blue-600 text-white flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center md:p-14 p-4`} style={{backgroundColor: '#F9F8FD'}}>
					<section className={'font-black tracking-wide lg:w-2/3'}>
						<div className={'md:text-4xl main-title text-xl'}>
							{ localization.translations['teacherTimeWorld'] }
							<span className={'text-xl ml-2'}>🌍</span>
						</div>
						<div className={'md:text-md text-sm my-6'}>
							{ localization.translations['teacherTimeDesc'] }
						</div>
						<button onClick={callTeacher} className={'bg-green-500 text-white flex justify-center hover:bg-green-700 transition-all md:w-auto w-full font-bold sm:text-lg text-md rounded sm:p-3 p-2'}>
							{ localization.translations['callTeacher'] } 🚀
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
