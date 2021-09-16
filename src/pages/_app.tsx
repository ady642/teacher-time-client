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
	return <ContextProvider>
		<Component {...pageProps} />
	</ContextProvider>
}

export default MyApp
