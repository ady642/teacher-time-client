import '@/common/styles/globals.css'
import PageWithLayoutType from '@/common/types/pageWithLayout'

type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || ((children: any) => <>{children}</>)
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
