import '@/common/styles/globals.css'
import {Provider} from 'next-auth/client'

import PageWithLayoutType from '@/common/types/pageWithLayout'

type AppLayoutProps = {
    Component: PageWithLayoutType
    pageProps: any
}

function MyApp({Component, pageProps}: AppLayoutProps) {
    const Layout = Component.layout || ((children: any) => <>{children}</>)
    return <Layout>
        <Provider session={pageProps.session}>
            <Component {...pageProps} />
        </Provider>
    </Layout>
}

export default MyApp
