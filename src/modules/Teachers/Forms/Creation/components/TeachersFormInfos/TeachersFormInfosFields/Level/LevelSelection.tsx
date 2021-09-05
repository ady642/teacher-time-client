import {FunctionComponent, useState} from "react";
import CheckboxSelector from "@/common/components/CheckboxSelector/CheckboxSelector";
import {SelectionItemProps} from "@/common/components/CheckboxSelector/SelectionList/SelectionItem/SelectionItem";

interface LevelSelectionProps {

}

const FieldSelection: FunctionComponent<LevelSelectionProps> = () => {
	const [selectedLevels, setSelectedLevels] = useState<Set<number>>(() => new Set());

	const addLevel = (level: number) => {
		setSelectedLevels((prev) => new Set(prev).add(level));
	}

	const removeLevel = (level: number) => {
		setSelectedLevels(prev => {
			const next = new Set(prev);

			next.delete(level);

			return next;
		});
	}

	enum Levels {
		PRIMAIRE,
		COLLEGE,
		LYCEE,
		SUPERIEUR
	}

	const fields: SelectionItemProps[] = [
		{
			active: selectedLevels.has(Levels.PRIMAIRE),
			label: "Primaire",
			icon: '/img/icon/primaire.svg',
			onClick: () => selectedLevels.has(Levels.PRIMAIRE) ? removeLevel(Levels.PRIMAIRE): addLevel(Levels.PRIMAIRE)
		},
		{
			active: selectedLevels.has(Levels.COLLEGE),
			label: "Collège",
			icon: '/img/icon/college.svg',
			onClick: () => selectedLevels.has(Levels.COLLEGE) ? removeLevel(Levels.COLLEGE): addLevel(Levels.COLLEGE)
		},
		{
			active: selectedLevels.has(Levels.LYCEE),
			label: "Lycée",
			icon: '/img/icon/lycee.svg',
			onClick: () => selectedLevels.has(Levels.LYCEE) ? removeLevel(Levels.LYCEE): addLevel(Levels.LYCEE)
		},
		{
			active: selectedLevels.has(Levels.SUPERIEUR),
			label: "Supérieur",
			icon: '/img/icon/superieur.svg',
			onClick: () => selectedLevels.has(Levels.SUPERIEUR) ? removeLevel(Levels.SUPERIEUR): addLevel(Levels.SUPERIEUR)
		}
	]

	return <CheckboxSelector
		itemType={`${selectedLevels.size > 1 ? 'Niveaux': 'Niveau'}`}
		selectedItemCount={selectedLevels.size}
		items={fields}
	/>
}

export default FieldSelection
