import React, {FC, useEffect, useMemo} from 'react'
import Head from 'next/head'
import {GetServerSideProps, InferGetServerSidePropsType} from 'next'

import TeacherFilters from "@/modules/Teachers/List/components/TeacherFilters/TeacherFilters";
import TeacherList from "@/modules/Teachers/List/components/TeacherList/TeacherList";
import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import NoRoomModal from "@/modules/Room/components/NoRoomModal";
import useRoom from "@/modules/Room/hooks/useRoom";
import useFieldSelector from "@/modules/Teachers/List/components/TeacherFilters/FieldSelector/useFieldSelector";
import useLevelSelector from "@/modules/Teachers/List/components/TeacherFilters/ChipFilters/LevelSelector/useLevelSelector";
import useRoomGetters from "@/context/room/helpers/useRoomGetters";
import {socket} from "@/common/utils/client";

const ListPage: FC = ({ localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { noRoomModalOpened, setNoRoomModalOpened, callTeacher } = useRoom(localization.locale)
	const { fieldSelectorValue, fieldSelectorValues, setFieldSelectorValue } = useFieldSelector()
	const { levels, level, setLevelValue: setLevel } = useLevelSelector()
	const { rooms } = useRoomGetters()

	const teachers = useMemo(() => rooms.map((room) => room.teacher), [rooms])

	const openProfile = (id: string) => {
		console.log('go to teacher profile', id)
	}

	/*	const fetchBalance = useCallback(async () => {
		if(!token && !tokenCtx) {
			return
		}

		let balance = await paymentClient.getBalance()
		setBalance(balance)
	}, []) */

	useEffect(() => {
		socket.emit('get-rooms')
		//fetchBalance()
	}, [])

	return (
		<LanguageProvider localization={localization}>
			<Head>
				<title>Teacher-time | Professeurs</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<WhiteHeaderLayout
				locale={localization.locale}
				className={'h-full bg-customgray'}
			>
				<main className={'flex lg:px-36 md:px-20 p-8 flex-col justify-start'}>
					<TeacherFilters
					 	fieldSelectorValues={fieldSelectorValues} fieldSelectorValue={fieldSelectorValue} setFieldSelectorValue={setFieldSelectorValue}
						levels={levels} level={level} setLevel={setLevel}
					/>
					<TeacherList
						teachers={teachers}
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
		return {
			props: { token, localization }
		}
	} catch (e) {
		throw new Error(e)
	}
}

export default ListPage
