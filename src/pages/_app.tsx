import '@/common/styles/globals.css'
import {NextPage} from "next";

import { ContextProvider } from "@/context";
import {socket} from "@/common/utils/client";
import {useEffect} from "react";

type AppLayoutProps = {
    Component: NextPage;
    pageProps: any
}

const MyApp = ({Component, pageProps}: AppLayoutProps)  => {

	useEffect(() => {
		socket.on('on-room-created', async () => {
			console.log('room created')
		})
		socket.on('on-room-deleted', async () => {
			console.log('ROOM DELETED')
		})
	})

	return <ContextProvider>
		<Component {...pageProps} />
	</ContextProvider>
}

export default MyApp
