import {FC, useEffect} from 'react'
import Head from 'next/head'
import {GetServerSideProps, InferGetServerSidePropsType} from 'next'
import axios from "axios";

import styles from '@/modules/Home/styles/Home.module.scss'
import TeacherFilters from "@/modules/Home/components/TeacherFilters";
import TeacherList from "@/modules/Home/components/TeacherList/TeacherList";
import useAuthReducers from "@/context/auth/helpers/useAuthReducers";

const Home: FC = ({ teachers, token }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { openSignInModal }= useAuthReducers()
	const { setToken } = useAuthReducers()

	useEffect(() => {
		console.log(token)
		setToken(token)
	}, [token])

	const onClickOnTeacherCall = (teacherId = '') => {
		token ? console.log('jouvre la fenetre pour parler au teacher') : openSignInModal()
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Teachers</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={'flex flex-col justify-start'}>
				<TeacherFilters />
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
	console.log(token)
	try {
		const { data: teachers } = await axios.get(`${process.env.BASE_URL}/api/teachers/get_online_teachers`)
		return {
			props: { teachers, token }
		}
	} catch (e) {
		return {
			props: { teachers: [], token: '' }
		}
	}
}

export default Home
