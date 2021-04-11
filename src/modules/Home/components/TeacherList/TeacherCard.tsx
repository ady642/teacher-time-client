import Image from "next/image";
import {FunctionComponent} from "react";
import styles from '@/modules/Home/styles/TeacherCard.module.scss'
import Rating from '@material-ui/lab/Rating';
import {Chip} from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";

interface TeacherCArdProps {
    rating?: number
}

const TeacherCard: FunctionComponent<TeacherCArdProps> = ({rating = 4}) => {
    return <div className={styles.card}>
        <header className={'p-2 flex flex-col'}>
            <div className={'flex'}>
                <Image className={'rounded'} src={'/img/avatar.jpeg'} width={100} height={100} alt={'photo prof'}/>
                <div className={'ml-3 flex flex-col'}>
                    <span className={`${styles.tutorName} font-bold text-xl`}>Yves Haïk</span>
                    <Rating
                        className={'mt-1'}
                        value={rating}
                        size={'small'}
                        readOnly
                    />
                    <Chip
                        className={'mt-1 bg-gray-100'}
                        size={'small'}
                        style={{borderRadius: '4px'}}
                        icon={<FaceIcon/>}
                        label={'Diplome d\'enseignant'}
                    />
                </div>
            </div>
            <div className={'mt-3'}>
                <p className={'text-gray-500 text-xs'}>
                    10 years teaching inside the classroom and outside on the sports field - a great balance of English language. I am patient and funny.
                </p>
                <div className={'flex justify-end'}>
                    <button className={'transition-all rounded uppercase p-2 font-medium bg-green-400 text-white text-sm hover:bg-green-600'}>Appel</button>
                </div>
            </div>
        </header>
    </div>
}

export default TeacherCard
