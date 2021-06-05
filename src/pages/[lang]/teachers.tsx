import React, {FC, useCallback, useEffect, useState} from 'react'
import Head from 'next/head'
import {GetServerSideProps, GetStaticPaths, GetStaticProps, InferGetServerSidePropsType} from 'next'

import styles from '@/modules/Teachers/styles/Home.module.scss'
import TeacherFilters from "@/modules/Teachers/components/TeacherFilters";
import TeacherList from "@/modules/Teachers/components/TeacherList/TeacherList";
import useAuthReducers from "@/context/auth/helpers/useAuthReducers";
import usePaymentReducers from "@/context/payment/helpers/usePaymentReducers";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import PaymentClient from "@/modules/Payment/services/PaymentClient";
import {useRouter} from "next/router";
import client from "@/common/utils/client";
import Teacher from "@/modules/Teachers/models/Teacher";
import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import DefaultLayout from "@/common/layouts/DefaultLayout";
import {getInitialLocale} from "@/translations/getInitialLocale";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import useRoutePush from "@/common/hooks/useRoutePush";

const Home: FC = ({ teachers, token, localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { setBalance } = usePaymentReducers()
	const { token: tokenCtx } = useAuthGetters()
	const { openSignInModal, setToken }= useAuthReducers()
	const paymentClient = new PaymentClient(token || tokenCtx)
	const [locale, setLocale] = useState('')
	const { goTo } = useRoutePush()

	/*	const fetchBalance = useCallback(async () => {
		if(!token && !tokenCtx) {
			return
		}

		let balance = await paymentClient.getBalance()
		setBalance(balance)
	}, [])*/

	useEffect(() => {
		if(token) {
			setToken(token)
		}
		setLocale(getInitialLocale())

		//fetchBalance()
	}, [])

	const onClickOnTeacherCall = async (teacherId = '') => {
		await goTo(getInitialLocale(), `room/${teacherId}`)
	}

	return (
		<LanguageProvider localization={localization}>
			<Head>
				<title>Teacher-time | Professeurs</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<WhiteHeaderLayout
				locale={locale}
			>
				<div className={styles.container}>
					<Head>
						<title>Teachers</title>
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<main className={'flex flex-col justify-start'}>
						{/*<TeacherFilters />*/}
						<TeacherList
							teachers={teachers}
							onClickOnTeacherCall={onClickOnTeacherCall}
						/>
					</main>
				</div>
			</WhiteHeaderLayout>
		</LanguageProvider>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const token = ctx.query?.token ?? ''

	const localization = getLocalizationProps(ctx, "home");

	try {
		const { data: teachers } = await client('').get(`${process.env.BASE_URL}/api/teachers/get_online_teachers`)

		return {
			props: { teachers, token, localization }
		}
	} catch (e) {
		throw new Error(e)
	}
}

/*export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: ["en", "fr"].map((lang) => ({ params: { lang } })),
		fallback: false,
	};
};*/

export default Home
