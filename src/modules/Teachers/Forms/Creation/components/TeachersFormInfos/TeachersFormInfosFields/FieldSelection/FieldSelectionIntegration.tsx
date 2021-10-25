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
    SPANISH = 'spanish'
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

	const fields: SelectionItemProps[] = [
		{
			active: selectedFields.has(Fields.MATHS),
			label: "Mathématiques",
			icon: '/img/icon/pi.svg',
			onClick: () => selectedFields.has(Fields.MATHS) ? removeField(Fields.MATHS): addField(Fields.MATHS)
		},
		{
			active: selectedFields.has(Fields.ENGLISH),
			label: "Anglais",
			icon: '/img/icon/ingles.svg',
			onClick: () => selectedFields.has(Fields.ENGLISH) ? removeField(Fields.ENGLISH): addField(Fields.ENGLISH)
		},
		{
			active: selectedFields.has(Fields.FRENCH),
			label: "Français",
			icon: '/img/icon/francia.png',
			onClick: () => selectedFields.has(Fields.FRENCH) ? removeField(Fields.FRENCH): addField(Fields.FRENCH)
		},
		{
			active: selectedFields.has(Fields.SPANISH),
			label: "Espagnol",
			icon: '/img/icon/espana.png',
			onClick: () => selectedFields.has(Fields.SPANISH) ? removeField(Fields.SPANISH): addField(Fields.SPANISH)
		}
	]

	return <CheckboxSelector
		className={className}
		itemType={'Matières'}
		selectedItemCount={selectedFields.size}
		items={fields}
	/>
}

export default FieldSelectionIntegration
