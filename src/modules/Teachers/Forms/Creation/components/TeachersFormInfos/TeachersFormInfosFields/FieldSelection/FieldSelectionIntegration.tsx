import {FunctionComponent} from "react";
import CheckboxSelector from "@/common/components/CheckboxSelector/CheckboxSelector";
import {SelectionItemProps} from "@/common/components/CheckboxSelector/SelectionList/SelectionItem/SelectionItem";

interface FieldSelectionIntegrationProps {
	selectedFields: Set<string>;
	setSelectedFields: Function;
	className?: string
}

export enum Fields {
    MATHS = 'maths',
    ENGLISH = 'english',
    FRENCH = 'french',
    SPANISH = 'spanish',
	PHILOSOPHY = 'philosophy',
	HISTORY = 'history',
}

const FieldSelectionIntegration: FunctionComponent<FieldSelectionIntegrationProps> = ({ selectedFields, setSelectedFields, className }) => {
	const addField = (field: string) => {
		setSelectedFields((prev: string) => new Set(prev).add(field));
	}

	const removeField = (field: string) => {
		setSelectedFields((prev: string) => {
			const next = new Set(prev);

			next.delete(field);

			return next;
		});
	}

	type option = 'value' | 'label' | 'icon'
	type fieldOption = {
		[key in option]: string
	}
	const buildFields = (fieldsOption: fieldOption[]): SelectionItemProps[] => {
		return fieldsOption.map((field) => ({
			active: selectedFields.has(field.value),
			label: field.label,
			icon: field.icon,
			onClick: () => selectedFields.has(field.value) ? removeField(field.value): addField(field.value)
		}))
	}

	const fields = buildFields([
		{ value: Fields.MATHS, icon: '/img/icon/pi.svg', label: 'Mathématiques' },
		{ value: Fields.ENGLISH, icon: '/img/icon/ingles.png', label: 'Anglais' },
		{ value: Fields.FRENCH, icon: '/img/icon/francia.png', label: 'Français' },
		{ value: Fields.PHILOSOPHY, icon: '/img/icon/fields/philosophy.png', label: 'Philosophie' },
		{ value: Fields.HISTORY, icon: '/img/icon/fields/history.png', label: 'Histoire' },
		{ value: Fields.SPANISH, icon: '/img/icon/espana.png', label: 'Espagnol' },
	])

	return <CheckboxSelector
		className={className}
		itemType={'Matières'}
		selectedItemCount={selectedFields.size}
		items={fields}
	/>
}

export default FieldSelectionIntegration
