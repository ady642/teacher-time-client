import React, {FC, useEffect} from 'react'
import Head from 'next/head'

import Image  from 'next/image'
import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import Particles, {IParticlesParams} from 'react-particles-js';
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

	const particlesParams: IParticlesParams = {
		particles: {
			move: {
				speed: 1
			},
			number: {
				value: 50,
			},
			size: {
				value: 5
			},
			color: {
				value: "rgba(116,116,116,0.79)"
			},
			line_linked: {
				enable: true,
				distance: 50,
				color: 'rgba(89,89,89,0.73)'
			}
		}
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
				<Particles params={particlesParams} className={'particles'}/>
				<div className={`w-full bg-transparent h-full flex lg:flex-row flex-col lg:justify-between justify-center items-center md:p-14 p-4`} style={{backgroundColor: '#F9F8FD'}}>
					<section className={'font-black tracking-wide text-gray-500 lg:w-2/3'}>
						<div className={'md:text-2xl text-lg text-gray-800'}>
							{ localization.translations['teacherTimeWorld'] }
							<span className={'text-lg ml-2'}>🌍</span>
						</div>
						<div className={'md:text-md text-sm my-6'}>
							{ localization.translations['teacherTimeDesc'] }
						</div>
						<button onClick={callTeacher} className={'bg-green-500 text-white flex justify-center hover:bg-green-700 transition-all md:w-auto w-full font-bold sm:text-lg text-sm rounded sm:p-3 p-2'}>
							{ localization.translations['callTeacher'] } 🚀
						</button>
					</section>
					<Image className={'shadow-md'} src={'/img/board.png'} width={250} height={200}/>
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
