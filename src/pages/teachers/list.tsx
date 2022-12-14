import React, {FC, useEffect} from 'react'
import Head from 'next/head'
import {GetServerSideProps, InferGetServerSidePropsType} from 'next'

import TeacherFilters from "@/modules/Teachers/List/components/TeacherFilters/TeacherFilters";
import TeacherList from "@/modules/Teachers/List/components/TeacherList/TeacherList";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import NoRoomModal from "@/modules/Room/components/NoRoomModal";
import useRoom from "@/modules/Room/hooks/useRoom";
import useFieldSelector from "@/modules/Teachers/List/components/TeacherFilters/FieldSelector/useFieldSelector";
import useLevelSelector from "@/modules/Teachers/List/components/TeacherFilters/ChipFilters/LevelSelector/useLevelSelector";
import {socket} from "@/common/utils/client";
import TeacherClient from "@/modules/Teachers/services/TeacherClient";
import Teacher from "@/modules/Teachers/List/models/Teacher";

const ListPage: FC = ({ teachers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { noRoomModalOpened, setNoRoomModalOpened, callTeacher } = useRoom()
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
	}, []) */

	useEffect(() => {
		socket.emit('get-rooms')
		//fetchBalance()
	}, [])

	return (
		<>
			<Head>
				<title>Teacher-time | Professeurs</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<WhiteHeaderLayout className={'bg-customgray'}>
				<main className={'flex lg:px-36 md:px-12 p-8 flex-col justify-start'}>
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
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const token = ctx.query?.token ?? ''

	const teacherClient = new TeacherClient()
	const teachers = await teacherClient.getAll() ?? []
	const teachersFormatted = teachers.map((teacher) => new Teacher(teacher).toJSON())

	try {
		return {
			props: { token, teachers: teachersFormatted }
		}
	} catch (e) {
		throw new Error(e)
	}
}

export default ListPage
