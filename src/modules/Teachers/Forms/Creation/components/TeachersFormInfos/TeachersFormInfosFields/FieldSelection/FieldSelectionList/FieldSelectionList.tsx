import {FunctionComponent} from "react";
import TeachersFormInfosStepperImage
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosStepper/TeachersFormInfosStepperImage";
import FieldSelectionItem
, {FieldSelectionItemProps} from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/FieldSelection/FieldSelectionList/FieldSelectionItem";

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
			icon: '',
			onClick: () => selectedFields.has(Fields.MATHS) ? removeField(Fields.MATHS): addField(Fields.MATHS)
		}
	]

	return <>
		{ fields.map((field) =>
			<FieldSelectionItem
				key={field.label}
				active={field.active}
				label={field.label}
				icon={field.icon}
				onClick={field.onClick}
			/>
		)
		}
	</>
}

export default FieldSelectionList
