import {FunctionComponent, useState} from "react";
import FieldSelectionSelectedItemCount
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/FieldSelection/FieldSelectionSelectedItemCount";
import FieldSelectionList
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/FieldSelection/FieldSelectionList/FieldSelectionList";

interface FieldSelectionProps {

}

const Selection: FunctionComponent<FieldSelectionProps> = () => {
	const [selectedFields, setSelectedFields] = useState<Set<number>>(() => new Set());

	const addField = (field: number) => {
		setSelectedFields((prev) => new Set(prev).add(field));
	}

	const removeField = (field: number) => {
		setSelectedFields(prev => {
			const next = new Set(prev);

			next.delete(field);

			return next;
		});
	}


	return <div>
		<FieldSelectionSelectedItemCount selectedFieldCount={selectedFields.size} />
		<FieldSelectionList
			selectedFields={selectedFields}
			addField={addField}
			removeField={removeField}
		/>
	</div>
}

export default Selection
