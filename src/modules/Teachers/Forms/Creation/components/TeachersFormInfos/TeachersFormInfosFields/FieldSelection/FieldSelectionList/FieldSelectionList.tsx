import {FunctionComponent, createElement} from "react";
import FieldSelectionItem
, {FieldSelectionItemProps} from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/FieldSelection/FieldSelectionList/FieldSelectionItem";
import FunctionsIcon from '@material-ui/icons/Functions';

interface FieldSelectionListProps {
	selectedFields: Set<number>;
	addField: (field: number) => void;
	removeField: (field: number) => void;
}

enum Fields {
	MATHS,
}

const FieldSelectionList: FunctionComponent<FieldSelectionListProps> = ({ selectedFields, addField, removeField }) => {
	const fields: FieldSelectionItemProps[] = [
		{
			active: selectedFields.has(Fields.MATHS),
			label: "Mathématiques",
			icon: createElement(FunctionsIcon),
			onClick: () => selectedFields.has(Fields.MATHS) ? removeField(Fields.MATHS): addField(Fields.MATHS)
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
