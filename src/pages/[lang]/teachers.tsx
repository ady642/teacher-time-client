import React, {FC, useEffect, useState} from 'react'
import Head from 'next/head'
import {GetServerSideProps, InferGetServerSidePropsType} from 'next'

import TeacherFilters from "@/modules/Teachers/components/TeacherFilters/TeacherFilters";
import TeacherList from "@/modules/Teachers/components/TeacherList/TeacherList";
import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import {getInitialLocale} from "@/translations/getInitialLocale";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import NoRoomModal from "@/modules/Room/components/NoRoomModal";
import useRoom from "@/modules/Room/hooks/useRoom";
import useFieldSelector from "@/modules/Teachers/components/TeacherFilters/FieldSelector/useFieldSelector";
import useLevelSelector from "@/modules/Teachers/components/TeacherFilters/ChipFilters/LevelSelector/useLevelSelector";

const Home: FC = ({ teachers, localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const [locale, setLocale] = useState('')

	const { noRooms, noRoomModalOpened, setNoRoomModalOpened, callTeacher } = useRoom(localization.locale)
	const { fieldSelectorValue, fieldSelectorValues, setFieldSelectorValue } = useFieldSelector()
	const { levels, level, setLevelValue: setLevel } = useLevelSelector()

	const openProfile = (id: string) => {
		console.log('go to teacher profile', id)
	}

	/*	const fetchBalance = useCallback(async () => {
		if(!token && !tokenCtx) {
			return
		}

		let balance = await paymentClient.getBalance()
		setBalance(balance)
	}, [])*/


	useEffect(() => {
		// TODO: fetch teachers after filters change
	}, [fieldSelectorValue])

	useEffect(() => {
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
				className={'h-full bg-customgray'}
			>
				<main className={'flex lg:px-36 md:px-20 p-8 flex-col justify-start'}>
					<TeacherFilters
					 	fieldSelectorValues={fieldSelectorValues} fieldSelectorValue={fieldSelectorValue} setFieldSelectorValue={setFieldSelectorValue}
						levels={levels} level={level} setLevel={setLevel}
					/>
					<TeacherList
						teachers={teachers}
						noRooms={noRooms}
						onCall={callTeacher}
						onOpenProfile={openProfile}
					/>
				</main>
				<NoRoomModal open={noRoomModalOpened} handleClose={() => setNoRoomModalOpened(false)} />
			</WhiteHeaderLayout>
		</LanguageProvider>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const token = ctx.query?.token ?? ''

	const localization = getLocalizationProps(ctx, "teachers");

	try {
		//const { data: teachers } = await client('').get(`${process.env.BASE_URL}/api/teachers/get_online_teachers`)

		const teachers = [
			{
				_id: '60bb3e699ba3676bb91d4e31',
				hourlyRate: 30,
				rating: 5,
				hasDiploma: true,
				description: 'Professeur de mathématiques. Pour toutes questions mathématiques',
				avatar: '/img/drawbg.jpg',
				name: 'Adrien HM',
				languages: ['es', 'fr']
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
