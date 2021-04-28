import {FC, useEffect} from 'react'
import Head from 'next/head'
import {GetServerSideProps, InferGetServerSidePropsType} from 'next'
import axios from "axios";

import styles from '@/modules/Home/styles/Home.module.scss'
import TeacherFilters from "@/modules/Home/components/TeacherFilters";
import TeacherList from "@/modules/Home/components/TeacherList/TeacherList";
import useAuthReducers from "@/context/auth/helpers/useAuthReducers";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";

const Home: FC = ({ teachers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { openSignInModal }= useAuthReducers()
    const { token } = useAuthGetters()

    const onClickOnTeacherCall = (teacherId = '') => {
        token ? console.log('jouvre la fenetre pour parler au teacher') : openSignInModal()
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

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const { data: teachers } = await axios.get(`${process.env.BASE_URL}/api/teachers/get_online_teachers`)
        return {
            props: { teachers }
        }
    } catch (e) {
        return {
            props: { teachers: [] }
        }
    }
}

export default Home
