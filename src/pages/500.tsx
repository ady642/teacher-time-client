import { FC } from 'react'
import Head from 'next/head'

import PageWithLayoutType from '@/common/types/pageWithLayout'
import DefaultLayout from '@/common/layouts/DefaultLayout'
import styles from '@/modules/Teachers/styles/Home.module.scss'

const Custom500: FC = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Teacher Time - 500</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>500 - Page not found</h1>
        </div>
    )
}

(Custom500 as PageWithLayoutType).layout = DefaultLayout

export default Custom500
