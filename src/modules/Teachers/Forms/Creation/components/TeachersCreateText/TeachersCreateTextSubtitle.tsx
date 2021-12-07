import {FunctionComponent} from "react";
import teachersCreateTextStyle from "@/modules/Teachers/Forms/Creation/styles/teachersCreateTextStyle.module.scss"

interface TeachersCreateTextTitleProps {

}

const TeachersCreateTextTitle: FunctionComponent<TeachersCreateTextTitleProps> = () => {
	return <div className={teachersCreateTextStyle['teachers-create__text__subtitle']}>
		<p className={'mb-4 text-xl'}>
			Teacher-time est une plateforme vous permettant d'apparaître disponible pour des élèves ayant des questions.
			Vous aidez les élèves et augmentez vos revenus !
		</p>
		<p>
			Étudiants, enseignants, autodidactes, passionnés, diplômés, professionnels...
			Rejoignez les professeurs de Teacher-time.com ! On vous attend 😍
		</p>
	</div>
}

export default TeachersCreateTextTitle
