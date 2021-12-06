import {FunctionComponent} from "react";
import StudentChoice from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/StudentChoice";
import TeacherChoice from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/TeacherChoice";
import styles from '@/modules/Landing/ChoiceBetweenStudentAndTeacher/styles.module.scss'
import classNames from "classnames";

const index: FunctionComponent = () => {
	const studentClasses = classNames([styles['container__student'], styles['container']])
	const teacherClasses = classNames([styles['container__teacher'], styles['container']])

	return <div className={'flex h-full w-full'}>
		<div className={studentClasses}>
			<StudentChoice />
		</div>
		<div className={teacherClasses}>
			<TeacherChoice />
		</div>
	</div>
}

export default index
