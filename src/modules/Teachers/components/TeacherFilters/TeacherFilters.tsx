import {FunctionComponent, useState} from "react";
import PESelect from "@/common/components/Selects/Select";
import TeacherFiltersModel from "@/modules/Teachers/models/TeacherFiltersModel";
import useRoutePush from "@/common/hooks/useRoutePush";
import useTranslation from "@/common/hooks/useTranslation";
import styles from '@/modules/Teachers/styles/TeacherFilters.module.scss'
import {Menu} from "@material-ui/icons";
import {MenuItem} from "@material-ui/core";
import FieldSelector from "@/modules/Teachers/components/TeacherFilters/FieldSelector/FieldSelector";

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
		<div className="flex justify-center">
			<FieldSelector />
		</div>
	</div>
}

export default TeacherFilters
