import {FunctionComponent} from "react";
import teachersCreateTextStyle from '@/modules/Teachers/Forms/Creation/styles/teachersCreateTextStyle.module.scss'

interface TeachersCreateTextImageProps {

}

const TeachersCreateTextImage: FunctionComponent<TeachersCreateTextImageProps> = () => {
	return <img
		className={teachersCreateTextStyle['teachers-create__text__image']}
		src={'/img/teachers-speaking.svg'}
		alt={'TTvideo'}
		width={500}
		height={300}
	/>
}

export default TeachersCreateTextImage
