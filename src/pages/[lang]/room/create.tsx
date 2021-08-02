import {FunctionComponent, useEffect} from "react";
import {socket} from "@/common/utils/client";
import useRoutePush from "@/common/hooks/useRoutePush";
import { v4 } from "uuid";
import useAppReducers from "@/context/app/helpers/useAppReducers";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";

const CreateRoom: FunctionComponent = ({ localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { goTo } = useRoutePush()
	const { setAppLoading } = useAppReducers()
	const { token } = useAuthGetters()

	const createRoom = () => {
		const roomID = v4()
		socket.emit('create-room', roomID)
		setAppLoading(true)
	}

	useEffect(() => {
		if(!token) {
			goTo('fr', '/')
		}
		socket.on('on-room-created', async (roomID: string) => {
			await goTo('fr', `room/${roomID}`)
		})
	}, [])

	return <LanguageProvider localization={localization}>
		<WhiteHeaderLayout locale={localization.locale}>
			<div className="p-10">
				<button className={'bg-green-500 hover:bg-green-700 text-white rounded p-5'} onClick={createRoom}>
					Créer votre room
				</button>
			</div>
		</WhiteHeaderLayout>
	</LanguageProvider>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const localization = getLocalizationProps(ctx, "room");

	return { props: { localization } }
}

export default CreateRoom
