import {FC, useCallback, useEffect} from 'react'
import Head from 'next/head'
import {GetServerSideProps, InferGetServerSidePropsType} from 'next'

import styles from '@/modules/Teachers/styles/Home.module.scss'
import TeacherFilters from "@/modules/Teachers/components/TeacherFilters";
import TeacherList from "@/modules/Teachers/components/TeacherList/TeacherList";
import useAuthReducers from "@/context/auth/helpers/useAuthReducers";
import usePaymentReducers from "@/context/payment/helpers/usePaymentReducers";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import PaymentClient from "@/modules/Payment/services/PaymentClient";
import {useRouter} from "next/router";
import client from "@/common/utils/client";

const Home: FC = ({ teachers, token }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { setBalance } = usePaymentReducers()
	const { token: tokenCtx } = useAuthGetters()
	const { openSignInModal, setToken }= useAuthReducers()
	const paymentClient = new PaymentClient(token || tokenCtx)
	const router = useRouter()

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

		//fetchBalance()
	}, [])

	const onClickOnTeacherCall = (teacherId = '') => {
		token || tokenCtx ? router.push(`/room/${teacherId}`) : openSignInModal()
	}

	return (
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
	)
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const token = query?.token ?? ''

	try {
		const { data: teachers } = await client('').get(`${process.env.BASE_URL}/api/teachers/get_online_teachers`)

		return {
			props: { teachers, token }
		}
	} catch (e) {
		throw new Error(e)
	}
}

export default Home
