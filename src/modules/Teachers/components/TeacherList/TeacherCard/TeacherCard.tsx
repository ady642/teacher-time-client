import {FunctionComponent} from "react";
import styles from '@/modules/Teachers/styles/TeacherCard.module.scss'
import Teacher from "@/modules/Teachers/models/Teacher";
import TeacherCardAvatar from "@/modules/Teachers/components/TeacherList/TeacherCard/TeacherCardAvatar";
import TeacherCardFirstLine
	from "@/modules/Teachers/components/TeacherList/TeacherCard/TeacherCardFirstLine/TeacherCardFirstLine";
import TeacherCardSecondLine
	from "@/modules/Teachers/components/TeacherList/TeacherCard/TeacherCardSecondLine/TeacherCardSecondLine";
import TeacherCardThirdLine
	from "@/modules/Teachers/components/TeacherList/TeacherCard/TeacherCardThirdLine/TeacherCardThirdLine";

interface TeacherCardProps {
    teacher: Teacher;
	onCall: (id: string) => void;
	onOpenProfile: (id: string) => void
}

const TeacherCard: FunctionComponent<TeacherCardProps> = ({onCall, onOpenProfile, teacher}) => {
	return <div className={styles.card}>
		<TeacherCardAvatar avatar={teacher.avatar} />
		<div className={'p-5'}>
			<TeacherCardFirstLine name={teacher.name} rating={teacher.rating} />
			<TeacherCardSecondLine description={teacher.description} />
			<TeacherCardThirdLine onCall={onCall} onOpenProfile={onOpenProfile} languages={teacher.languages} />
		</div>
	</div>
}

export default TeacherCard
