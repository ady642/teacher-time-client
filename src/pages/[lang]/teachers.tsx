import React, {FC, useEffect, useState} from 'react'
import Head from 'next/head'
import {GetServerSideProps, InferGetServerSidePropsType} from 'next'

import styles from '@/modules/Teachers/styles/Home.module.scss'
import TeacherFilters from "@/modules/Teachers/components/TeacherFilters";
import TeacherList from "@/modules/Teachers/components/TeacherList/TeacherList";
import useAuthReducers from "@/context/auth/helpers/useAuthReducers";
import usePaymentReducers from "@/context/payment/helpers/usePaymentReducers";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import PaymentClient from "@/modules/Payment/services/PaymentClient";
import client from "@/common/utils/client";
import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import {getInitialLocale} from "@/translations/getInitialLocale";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import useRoutePush from "@/common/hooks/useRoutePush";
import {socket} from "@/common/utils/client";
import TeacherClient from "@/modules/Teachers/services/TeacherClient";
import useAppReducers from "@/context/app/helpers/useAppReducers";
import NoRoomModal from "@/modules/Room/components/NoRoomModal";
import useRoom from "@/modules/Room/hooks/useRoom";


const Home: FC = ({ teachers, token, localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { setBalance } = usePaymentReducers()
	const { setAppLoading } = useAppReducers()
	const { token: tokenCtx } = useAuthGetters()
	const { openSignInModal, setToken }= useAuthReducers()
	const paymentClient = new PaymentClient(token || tokenCtx)
	const [locale, setLocale] = useState('')

	const { noRooms, noRoomModalOpened, setNoRoomModalOpened, callTeacher } = useRoom(localization.locale)

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

	return (
		<LanguageProvider localization={localization}>
			<Head>
				<title>Teacher-time | Professeurs</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<WhiteHeaderLayout
				locale={locale}
				className={'h-full'}
			>
				<main className={'flex flex-col justify-start'}>
					<TeacherFilters />
					<TeacherList
						teachers={teachers}
						noRooms={noRooms}
						onClickOnTeacherCall={callTeacher}
					/>
				</main>
				<NoRoomModal open={noRoomModalOpened} handleClose={() => setNoRoomModalOpened(false)} />
			</WhiteHeaderLayout>
		</LanguageProvider>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const token = ctx.query?.token ?? ''

	const localization = getLocalizationProps(ctx, "home");

	try {
		//const { data: teachers } = await client('').get(`${process.env.BASE_URL}/api/teachers/get_online_teachers`)

		const teachers = [
			{
				_id: '60bb3e699ba3676bb91d4e31',
				hourlyRate: 30,
				rating: 5,
				hasDiploma: true,
				description: 'Professeur de mathématiques. Vous pouvez m\'appeler pour toutes questions ',
				avatar: '/img/avatar.png',
				name: 'Yohan'
			}
		]
		return {
			props: { teachers, token, localization }
		}
	} catch (e) {
		throw new Error(e)
	}
}

export default Home
