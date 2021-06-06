import {FunctionComponent, useState} from "react";
import PESelect from "@/common/components/Selects/Select";
import TeacherFiltersModel from "@/modules/Teachers/models/TeacherFiltersModel";
import useRoutePush from "@/common/hooks/useRoutePush";
import useTranslation from "@/common/hooks/useTranslation";
import styles from '@/modules/Teachers/styles/TeacherFilters.module.scss'
import {Menu} from "@material-ui/icons";
import {MenuItem} from "@material-ui/core";

interface TeacherFiltersProps {
}

const TeacherFilters: FunctionComponent<TeacherFiltersProps> = () => {
	const [filters, setFilters] = useState(new TeacherFiltersModel())
	const { locale } = useTranslation()
	const { goTo } = useRoutePush()

	const handleChangeMatiere = (matiere: string) => {
		const newFilters = {...filters}
		newFilters.matiere = matiere
		setFilters(newFilters)
	}

	const goToContact = async () => {
		await goTo(locale, 'contact')
	}


	const matiereItems = [{
		value: 'maths',
		label: 'Mathématiques'
	}, {
		value: 'french',
		label: 'Français'
	}, {
		value: 'spanish',
		label: 'Espagnol'
	}, {
		value: 'english',
		label: 'Anglais'
	}]

	return <div className={`flex flex-col mb-4 p-8`}>
		<div className={'flex flex-wrap'}>
			<h1 className={'flex items-center text-l sm:text-2xl'}>Trouver un professeur</h1>
		</div>
		<div className={'mt-4 flex'}>
			<PESelect
				value={filters.matiere}
				handleChange={handleChangeMatiere}
				label={'Matière'}
				items={matiereItems}
				disabledItems={['english', 'french']}
			/>
		</div>
		<div>
			<span>Nous cherchons des professeurs: </span>
			<button onClick={goToContact} className={'transition-all rounded p-2 ml-2 mt-5 font-medium bg-blue-400 text-white text-sm hover:bg-blue-600'}>Inscription professeurs</button>
		</div>
	</div>
}

export default TeacherFilters
