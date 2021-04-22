import '@/common/styles/globals.css'
import {NextPage} from "next";
import {Provider} from 'next-auth/client'

import { ContextProvider } from "@/context";
import DefaultLayout from "@/common/layouts/DefaultLayout";

type AppLayoutProps = {
    Component: NextPage
    pageProps: any
}

function MyApp({Component, pageProps}: AppLayoutProps) {
    const Layout = DefaultLayout
    return <ContextProvider>
            <Provider session={pageProps.session}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
    </ContextProvider>

}

export default MyApp
