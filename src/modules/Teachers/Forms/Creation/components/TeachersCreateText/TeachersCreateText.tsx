import {FunctionComponent} from "react";
import TeachersCreateTextTitle
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateText/TeachersCreateTextTitle";
import TeachersCreateTextImage
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateText/TeachersCreateTextImage";
import TeachersCreateTextSubtitle
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateText/TeachersCreateTextSubtitle";
import teachersCreateTextStyle from '@/modules/Teachers/Forms/Creation/styles/teachersCreateTextStyle.module.scss'

interface TeachersCreateTextProps {

}

const TeachersCreateText: FunctionComponent<TeachersCreateTextProps> = () => {
	return <div className={teachersCreateTextStyle['teachers-create__text__container']}>
		<TeachersCreateTextTitle />
		<TeachersCreateTextImage />
		<TeachersCreateTextSubtitle />
	</div>
}

export default TeachersCreateText
