import '@/common/styles/globals.css'
import {NextPage} from "next";

import { ContextProvider } from "@/context";

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
