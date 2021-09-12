import {FunctionComponent} from "react";
import teachersCreateTextStyle from "@/modules/Teachers/Forms/Creation/styles/teachersCreateTextStyle.module.scss"

interface TeachersCreateTextTitleProps {

}

const TeachersCreateTextTitle: FunctionComponent<TeachersCreateTextTitleProps> = () => {
	return <div className={teachersCreateTextStyle['teachers-create__text__subtitle']}>
		<p className={'mb-4'}>
			Libre et sans intermédiaire, enseignez près de chez vous pour rencontrer des élèves géniaux.
			Langues, Sports, Musique, Arts, Loisirs, Scolaire, plus de 1000 connaissances à partager.
		</p>
		<p>
			Étudiants, enseignants, autodidactes, passionnés, diplômés, professionnels...
			Rejoignez la communauté des Super Professeurs ! On vous attend 😍
		</p>
	</div>
}

export default TeachersCreateTextTitle
