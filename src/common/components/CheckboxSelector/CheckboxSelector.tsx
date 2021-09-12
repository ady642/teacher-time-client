import {FunctionComponent} from "react";
import SelectedItemCount
	from "@/common/components/CheckboxSelector/SelectedItemCount";
import SelectionList
	from "@/common/components/CheckboxSelector/SelectionList/SelectionList";
import {SelectionItemProps} from "@/common/components/CheckboxSelector/SelectionList/SelectionItem/SelectionItem";

interface SelectionProps {
	itemType: string;
	selectedItemCount: number;
	items: SelectionItemProps[]
}

const CheckboxSelector: FunctionComponent<SelectionProps> = ({
	items,
	selectedItemCount,
	itemType
}) => {
/*	const [selectedItems, setSelectedFields] = useState<Set<number>>(() => new Set());

	const addItem = (field: number) => {
		setSelectedFields((prev) => new Set(prev).add(field));
	}

	const removeItem = (field: number) => {
		setSelectedFields(prev => {
			const next = new Set(prev);

			next.delete(field);

			return next;
		});
	}*/


	return <div>
		<SelectedItemCount selectedItemCount={selectedItemCount} itemType={itemType} />
		<SelectionList
			items={items}
		/>
	</div>
}

export default CheckboxSelector
