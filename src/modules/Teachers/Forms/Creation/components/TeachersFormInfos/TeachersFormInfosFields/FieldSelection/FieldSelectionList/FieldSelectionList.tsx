import {FunctionComponent} from "react";
import FieldSelectionItem
, {FieldSelectionItemProps} from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/FieldSelection/FieldSelectionList/FieldSelectionItem/FieldSelectionItem";

interface FieldSelectionListProps {
	selectedFields: Set<number>;
	addField: (field: number) => void;
	removeField: (field: number) => void;
}

enum Fields {
	MATHS,
	ENGLISH,
	FRENCH,
	SPANISH
}

const FieldSelectionList: FunctionComponent<FieldSelectionListProps> = ({ selectedFields, addField, removeField }) => {
	const fields: FieldSelectionItemProps[] = [
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

	return <>
		{ fields.map((field, index) =>
			<FieldSelectionItem
				key={field.label}
				{ ...fields[index] }
			/>
		)
		}
	</>
}

export default FieldSelectionList
