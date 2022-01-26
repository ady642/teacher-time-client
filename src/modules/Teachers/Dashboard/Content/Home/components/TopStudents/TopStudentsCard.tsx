import {FunctionComponent} from "react";
import styles from './topStudentsStyle.module.scss'
import useTranslation from "@/common/hooks/useTranslation";
import TopStudentsCardItem, {
	Student
} from "@/modules/Teachers/Dashboard/Content/Home/components/TopStudents/TopStudentsCardItem";

interface TopStudentsCardProps {
	topStudents: Student[]
}

const TopStudentsCard: FunctionComponent<TopStudentsCardProps> = (props) => {
	const { topStudents } = props

	const { t } = useTranslation()

	return <div className={styles['top-students__card']}>
		<h1 className={styles['top-students__card__title']}>{ t('dashboard.home.topStudents.title') }</h1>
		{ topStudents.map((topStudent) => <TopStudentsCardItem
			key={topStudent.student._id}
			topStudent={topStudent}
		/> )}
	</div>
}

export default TopStudentsCard
