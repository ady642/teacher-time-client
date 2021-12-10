import React, {FunctionComponent} from "react";
import StudentChoice from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/StudentChoice";
import TeacherChoice from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/TeacherChoice";
import styles from '@/modules/Landing/ChoiceBetweenStudentAndTeacher/styles.module.scss'
import classNames from "classnames";
import Logo from "@/common/components/Logos/Logo";
import cookies from "next-cookies";
import {GetServerSideProps} from "next";
import Head from "next/head";

const LandingIndex: FunctionComponent = () => {
	const studentClasses = classNames([styles['container__student'], styles['container']])
	const teacherClasses = classNames([styles['container__teacher'], styles['container']])

	return <>
		<Head>
			<title>Teacher-time | Choice</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<div className={styles['container__main']}>
			<div className={styles['logo']}>
				<Logo width={170} height={50} />
			</div>
			<div className={studentClasses}>
				<StudentChoice />
			</div>
			<div className={teacherClasses}>
				<TeacherChoice />
			</div>
		</div>
	</>
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {
	return {
		props: {
			initialChoice: cookies(ctx).initialChoice || ''
		}
	}
}



export default LandingIndex
