import Image from "next/image";
import {FunctionComponent} from "react";
import styles from '@/modules/Teachers/styles/TeacherCard.module.scss'
import Rating from '@material-ui/core/Rating';
import {Chip} from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import Teacher from "@/modules/Teachers/models/Teacher";

interface TeacherCArdProps {
    teacher: Teacher;
    onClickOnTeacherCall: (id: string) => void
}

const TeacherCard: FunctionComponent<TeacherCArdProps> = ({onClickOnTeacherCall, teacher: { id, rating, hasDiploma, description, avatar, name }}) => {
	return <div className={styles.card}>
		<header className={'p-2 flex flex-col'}>
			<div className={'flex'}>
				<div className={styles.tutorPhoto}>
					<Image className={'rounded'} src={avatar} width={100} height={100} alt={'photo prof'}/>
				</div>
				<div className={'ml-3 flex flex-col'}>
					<span className={`${styles.tutorName} font-bold text-xl`}>{name}</span>
					<Rating
						className={'mt-1'}
						value={rating}
						size={'small'}
						readOnly
					/>
					{ hasDiploma && <Chip
						className={'mt-1 bg-gray-100'}
						size={'small'}
						style={{borderRadius: '4px'}}
						icon={<FaceIcon/>}
						label={'Diplome d\'enseignant'}
					/> }
				</div>
			</div>
			<div className={'mt-3'}>
				<p className={'text-gray-500 flex flex-wrap text-xs'}>
					{ description }
				</p>
				<div className={'flex justify-end mt-2'}>
					<button onClick={() => onClickOnTeacherCall(id)} className={'transition-all rounded uppercase p-2 font-medium bg-green-400 text-white text-sm hover:bg-green-600'}>Appel</button>
				</div>
			</div>
		</header>
	</div>
}

export default TeacherCard
