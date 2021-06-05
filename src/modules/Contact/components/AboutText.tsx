import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import InfoCards from "@/modules/Contact/components/InfoCards";
import Tooltip from "@/common/components/Tooltip/Tooltip";
import Image from "next/image";

interface AboutCardProps {

}

const AboutText: FunctionComponent<AboutCardProps> = () => {
	const { t } = useTranslation()

	return <aside className={'lg:w-1/3 w-full'}>
		<h2 className={'font-bold sm:text-3xl letter-spacing text-xl mb-5 capitalize'}>
			{ t('aboutTitle')}
		</h2>
		<div className={'text-gray-700'}>
			<p className='mb-8 text-xl flex flex-col flex-nowrap'>
				<span>Teacher-time est une plate-forme gratuite mise à la disposition de tous</span>
				<span>les
					<Tooltip text={'enseignants'} title="Teacher-time propose à tous les enseignants d'exercer une activité pédagogique à domicile rémunératrice.Pour s'inscrire il suffit de renseigner le formulaire ci-contre" />
					ou
					<Tooltip text={'étudiants'} title="Teacher-time propose une plate-forme interactive aux étudiants désireux d'apporter une aide scolaire. Plusieurs formules de rémunération sont à l'étude.Pour s'inscrire il suffit de renseigner le formulaire ci-contre">
					</Tooltip>
					pour :
				</span>
			</p>
			<div className={'flex flex-col text-xl mb-8 text-black'}>
				<span className={'mb-3'}>
					📚 Donner des
					<Tooltip text={'cours particuliers'} title={
						<>
							<h2>Le professeur peut: </h2>
							<ul className={'text-sm list-inside my-2'} style={{listStyleType: 'disclosure-closed'}}>
								<li>donner un cours particulier à un élève</li>
								<li>il peut aussi se  connecter à la plate-forme teacher-time  et répondre à la  demande d'un élève connecté</li>
							</ul>
							<span>
								Plusieurs rémunérations  sont à l'étude.Pour s'inscrire il suffit  de renseigner le formulaire ci-contre
							</span>
						</>
					} />
					à distance en direct
				</span>
				<span className={'mb-3'}>
					🎙 Assurer des
					<Tooltip text={'conférences'} title={'Chaque professeurs s\'il le désire assurer un cours ou une conférence pour les élèves de son choix. Plusieurs formules  ee rémunération  sont possibles.Pour s\'inscrire il suffit de renseigner le formulaire ci-contre'} />
				</span>
				<span>
					📝 Proposer des
					<Tooltip text={'corrections de devoir'} title={'Chaque professeur disposant d\'un scanner peut proposer ses devoirs, puis apporter à chaque élève une correction personnalisée .Pour s\'inscrire il suffit de renseigner le formulaire ci-contre'} />
				</span>
				<span className="mt-8">
					le professeur communique en  direct avec les <Tooltip text={'élèves'} title={"Les élèves peuvent être choisis à l'avance par le professeur. L'élève peut aussi bien être un internaute connecté à cet instant cherchant une aide scolaire ou simplement un renseignement de nature pédagogique"} />
 					à l'aide d'un<Tooltip text={'tableau'} title={<><Image width="auto" height="auto" src={'/img/board.png'}/></>} />interactif et d'un microphone.
					Plusieurs
					<Tooltip
						text={'formules de rémunération'}
						title={<><span>Pour plus  de  renseignements, il  suffit de contacter le webmaster <a className={'text-blue-100 underline'} href="mailto:webmaster@teacher-time.com">webmaster@teacher-time.com</a></span></>}
					/>
					sont à l'étude.
				</span>
			</div>
		</div>
		<InfoCards />
	</aside>
}

export default AboutText
