import {FunctionComponent} from "react";
import styles from './topStudentsStyle.module.scss'
import Image from 'next/image'
import useDates from "@/common/hooks/useDates";
import User from "@/modules/Auth/types/User";

export interface Student {
	timeHelped: number,
	student: User
}

interface TopStudentsCardItemProps {
	topStudent: Student
}

const TopStudentsCardItem: FunctionComponent<TopStudentsCardItemProps> = (props) => {
	const { topStudent } = props
	const { convertToMinutes } = useDates()

	return <div className={styles['top-students__card__item']}>
		<div className={styles['top-students__card__item__avatar']}>
			<Image src={'/img/avatars/gertrudis.svg'} width={62} height={62} />
		</div>
		<div className={styles['top-students__card__item__infos']}>
			<span className={styles['top-students__card__item__infos__name']}>
				{ topStudent.student.firstName } { topStudent.student.lastName }
			</span>
			<span className={styles['top-students__card__item__infos__time']}>
				temps passé: { convertToMinutes(topStudent.timeHelped) }min
			</span>
		</div>
	</div>
}

export default TopStudentsCardItem
