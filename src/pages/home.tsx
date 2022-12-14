import React, {FC, useEffect} from 'react'
import Head from 'next/head'

import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import useRoutePush from "@/common/hooks/useRoutePush";

import styles from '@/common/styles/WhiteHeader.module.scss'
import HeadBand from "@/modules/home/components/Headband/HeadBand";
import TextEnd from "@/modules/home/components/TextEnd/TextEnd";
import TextDraw1 from "@/modules/home/components/TextDraws/TextDraw1";
import TextDraw2 from "@/modules/home/components/TextDraws/TextDraw2";
import TextDraw3 from "@/modules/home/components/TextDraws/TextDraw3";
import Bounce from "@/modules/home/components/Bounce";
import homeStyles from "@/modules/home/styles/Home.module.scss"
import useAuthReducers from "@/context/auth/helpers/useAuthReducers";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";

const Home: FC = ({ token: tokenQuery }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { goTo } = useRoutePush()
	const { setToken, openRegisterModal } = useAuthReducers()
	const { token } = useAuthGetters()

	useEffect(() => {
		if(tokenQuery) {
			setToken(tokenQuery)
		}

		//fetchBalance()
	}, [])

	const goToTeachers = async () => {
		await goTo('teachers/list')
	}

	return (
		<>
			<Head>
				<title>Teacher-time | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<WhiteHeaderLayout
				className={`${styles.page}`}
			>
				<HeadBand goToTeachers={goToTeachers} />
				<div className={'w-full bg-white flew-wrap'}>
					<section className={'overflow-hidden'} >
						<div className="xl:px-40 lg:px-20 md:px-10 px-5 relative">
							<TextDraw1 />
							<TextDraw2
								openRegisterModal={openRegisterModal}
							/>
							<TextDraw3 />
							<Bounce className={`bg-yellow-300 ${homeStyles.bounce1}`}  />
							<Bounce className={`bg-blueviolet ${homeStyles.bounce2}`} />
							<Bounce className={`bg-red-400 ${homeStyles.bounce3}`}  />
						</div>
						<TextEnd userConnected={Boolean(token)} />
					</section>
				</div>
			</WhiteHeaderLayout>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const token = ctx.query?.token ?? ''

	return { props: { token } }
}

export default Home
