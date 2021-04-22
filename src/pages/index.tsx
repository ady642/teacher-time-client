import {FC} from 'react'
import Head from 'next/head'
import { useSession, getSession } from 'next-auth/client'
import {GetServerSideProps, InferGetServerSidePropsType} from 'next'
import axios from "axios";

import styles from '@/modules/Home/styles/Home.module.scss'
import TeacherFilters from "@/modules/Home/components/TeacherFilters";
import TeacherList from "@/modules/Home/components/TeacherList/TeacherList";
import useAuthReducers from "@/context/auth/helpers/useAuthReducers";

const Home: FC = ({ teachers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [session] = useSession()
    const { openSignInModal }= useAuthReducers()

    const onClickOnTeacherCall = (teacherId = '') => {
        session ? console.log('jouvre la fenetre pour parler au teacher') : openSignInModal()
    }

      return (
          <div className={styles.container}>
            <Head>
              <title>Teachers</title>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const { data: teachers } = await axios.get(`${process.env.BASE_URL}/api/teachers/get_online_teachers`)
        const session = await getSession(context)
        return {
            props: { teachers, session }
        }
    } catch (e) {
        return {
            props: { teachers: [], session: {} }
        }
    }
}

export default Home
