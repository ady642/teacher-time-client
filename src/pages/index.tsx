import { FC } from 'react'
import Head from 'next/head'
import { useSession, getSession } from 'next-auth/client'
import {GetServerSideProps, InferGetServerSidePropsType} from 'next'
import axios from "axios";

import PageWithLayoutType from '@/common/types/pageWithLayout'
import DefaultLayout from '@/common/layouts/DefaultLayout'
import styles from '@/modules/Home/styles/Home.module.scss'
import TeacherFilters from "@/modules/Home/components/TeacherFilters";
import TeacherList from "@/modules/Home/components/TeacherList/TeacherList";


const Home: FC = ({ teachers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [session] = useSession()

    const onClickOnTeacherCall = (teacherId = '') => {
        session ? console.log('japelle le teacher') : console.log('jopen la modal de connexion')
    }

      return (
          <div className={styles.container}>
            <Head>
              <title>Teacher Time</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={'flex flex-col justify-start'}>
                <TeacherFilters />
                <TeacherList
                    teachers={teachers}
                    onClickOnTeacherCall={onClickOnTeacherCall}
                />
            </main>
          </div>
      )
    }

(Home as PageWithLayoutType).layout = DefaultLayout

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const { data: teachers } = await axios.get(`${process.env.BASE_URL}/api/teachers/get_online_teachers`)
        const session = await getSession(context)
        return {
            props: { teachers, session }
        }
    } catch (e) {
        throw new Error(e)
    }
}

export default Home
