import {FunctionComponent} from "react";
import styles from '@/modules/Teachers/List/styles/TeacherCard.module.scss'
import Teacher from "@/modules/Teachers/List/models/Teacher";
import TeacherCardFirstLine
	from "@/modules/Teachers/List/components/TeacherList/TeacherCard/TeacherCardFirstLine/TeacherCardFirstLine";
import TeacherCardSecondLine
	from "@/modules/Teachers/List/components/TeacherList/TeacherCard/TeacherCardSecondLine/TeacherCardSecondLine";
import TeacherCardThirdLine
	from "@/modules/Teachers/List/components/TeacherList/TeacherCard/TeacherCardThirdLine/TeacherCardThirdLine";

interface TeacherCardProps {
    teacher: Teacher;
	onCall: (id: string) => void;
	onOpenProfile: (id: string) => void
}

const TeacherCard: FunctionComponent<TeacherCardProps> = ({onCall, onOpenProfile, teacher}) => {
	return <div className={styles.card}>
		<div className={'p-5'}>
			<TeacherCardFirstLine name={teacher.name} rating={teacher.rating} />
			<TeacherCardSecondLine description={teacher.description} />
			<TeacherCardThirdLine onCall={onCall} onOpenProfile={onOpenProfile} fields={teacher.fields} languages={teacher.languages} />
		</div>
	</div>
}

export default TeacherCard
