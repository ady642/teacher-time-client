import { FC } from 'react'
import Head from 'next/head'

import styles from '@/modules/Home/styles/Home.module.scss'
import PageWithLayoutType from '@/common/types/pageWithLayout'
import DefaultLayout from '@/common/layouts/DefaultLayout'

const Home: FC = () => {
      return (
          <div className={styles.container}>
            <Head>
              <title>Planete Elève</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>

            </main>
          </div>
      )
    }

(Home as PageWithLayoutType).layout = DefaultLayout

export default Home
