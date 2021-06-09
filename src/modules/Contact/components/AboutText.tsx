import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import InfoCards from "@/modules/Contact/components/InfoCards";
import Tooltip from "@/common/components/Tooltip/Tooltip";
import Image from "next/image";

interface AboutCardProps {

}

const AboutText: FunctionComponent<AboutCardProps> = () => {
	const { t } = useTranslation()

	return <aside className={'lg:w-1/2 w-full'}>
		<h2 className={'font-bold sm:text-3xl letter-spacing text-xl mb-5 capitalize'}>
			{ t('aboutTitle')}
		</h2>
		<div className={'text-gray-700 flex flex-col'}>
			<span>
				Teacher-time est une plate-forme mise à la disposition de tous les enseignants pour exercer une activité pédagogique rémunératrice ou apporter une aide scolaire aux élèves en difficulté.
			</span>

			<ul className={'my-4'}>
				<li>* Le professeur peut se connecter à la plate-forme, attendre l'appel d'un élève et ainsi répondre à la demande de l'élève.</li>
				<li className={'my-3'}>* Chaque professeur, s'il le désire peut assurer un cours ou une  conférence pour les élèves de son choix.</li>
				<li>* Chaque professeur disposant d'un scanner peut proposer ses  devoirs, puis apporter à chaque élève une  correction personnalisée.</li>
			</ul>


			<span>
				Les élèves et le professeur communiquent à l'aide du tableau blanc et du microphone.
				Plusieurs formules de rémunération sont possibles.
			</span>

			<span className={'my-4'}>
				Les professeurs intéressés par un essai peuvent contacter teacher-time en renseignant le  formulaire ci-contre. Une réponse rapide vous  sera apportée.
			</span>
		</div>
		<InfoCards />
	</aside>
}

export default AboutText
