import { FC } from 'react'
import Head from 'next/head'

import PageWithLayoutType from '@/common/types/pageWithLayout'
import DefaultLayout from '@/common/layouts/DefaultLayout'
import styles from '@/modules/Teachers/styles/Home.module.scss'

const Custom404: FC = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Teacher Time - 404</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>404 - Page not found</h1>
        </div>
    )
}

(Custom404 as PageWithLayoutType).layout = DefaultLayout

export default Custom404
