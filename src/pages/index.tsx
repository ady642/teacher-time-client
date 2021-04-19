import { FC } from 'react'
import Head from 'next/head'

import PageWithLayoutType from '@/common/types/pageWithLayout'
import DefaultLayout from '@/common/layouts/DefaultLayout'
import styles from '@/modules/Home/styles/Home.module.scss'
import TeacherFilters from "@/modules/Home/components/TeacherFilters";
import TeacherList from "@/modules/Home/components/TeacherList/TeacherList";

const Home: FC = () => {
      return (
          <div className={styles.container}>
            <Head>
              <title>Teacher Time</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={'flex flex-col justify-start'}>
                <TeacherFilters />
                <TeacherList />
            </main>
          </div>
      )
    }

(Home as PageWithLayoutType).layout = DefaultLayout

export default Home
