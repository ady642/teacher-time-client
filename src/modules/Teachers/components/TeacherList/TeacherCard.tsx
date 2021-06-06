import {FunctionComponent} from "react";
import styles from '@/modules/Teachers/styles/TeacherCard.module.scss'
import Rating from '@material-ui/core/Rating';
import {Chip} from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import Teacher from "@/modules/Teachers/models/Teacher";
import useTranslation from "@/common/hooks/useTranslation";
import Image from "next/image";

interface TeacherCArdProps {
    teacher: Teacher;
    onClickOnTeacherCall: (id: string) => void
}

const TeacherCard: FunctionComponent<TeacherCArdProps> = ({onClickOnTeacherCall, teacher: { _id,avatar,  rating, hasDiploma, hourlyRate, description, name }}) => {
	const { t } = useTranslation();

	return <div className={styles.card}>
		<header className={'flex flex-col'}>
			<div className={'flex'}>
				{<div className={'mr-3'}>
					<Image className={'rounded'} src={avatar} width={70} height={70} alt={'photo prof'}/>
				</div>}
				<div className={'flex flex-col'}>
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
						label={t('diploma')}
					/> }
					{<div className='mt-2.5 w-min whitespace-nowrap text-blue-400 border border-blue-400 rounded p-1 flex items-center'>
						Période d'essai
					</div>}
				</div>
			</div>
			<div className={'mt-3'}>
				<p className={'text-gray-500 flex flex-wrap text-xs'}>
					{ description }
				</p>
				<div className={'flex justify-end mt-2'}>
					<button onClick={() => onClickOnTeacherCall(_id)} className={'transition-all rounded uppercase font-bold p-2 font-medium bg-green-600 text-white text-sm hover:bg-green-700'}>{t('call')} gratuit</button>
				</div>
			</div>
		</header>
	</div>
}

export default TeacherCard
