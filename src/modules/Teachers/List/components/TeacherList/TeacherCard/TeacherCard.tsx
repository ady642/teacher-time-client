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
	onOpenProfile: (id: string) => void;
	online: boolean
}

const TeacherCard: FunctionComponent<TeacherCardProps> = ({online, onCall, onOpenProfile, teacher}) => {
	const callTeacher = () => {
		onCall(teacher._id)
	}

	return <div className={styles.card}>
		<div className={'p-5'}>
			<TeacherCardFirstLine online={online} name={teacher.name} rating={teacher.rating} />
			<TeacherCardSecondLine description={teacher.description} />
			<TeacherCardThirdLine
				online={online}
				onCall={callTeacher}
				onOpenProfile={onOpenProfile}
				fields={teacher.fields}
				languages={teacher.languages}
			/>
		</div>
	</div>
}

export default TeacherCard
