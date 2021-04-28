import '@/common/styles/globals.css'
import {NextPage} from "next";

import { ContextProvider } from "@/context";
import DefaultLayout from "@/common/layouts/DefaultLayout";

type AppLayoutProps = {
    Component: NextPage
    pageProps: any
}

function MyApp({Component, pageProps}: AppLayoutProps) {
    const Layout = DefaultLayout
    return <ContextProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ContextProvider>
}

export default MyApp
