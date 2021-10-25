import {FunctionComponent} from "react";
import SelectedItemCount
	from "@/common/components/CheckboxSelector/SelectedItemCount";
import SelectionList
	from "@/common/components/CheckboxSelector/SelectionList/SelectionList";
import {SelectionItemProps} from "@/common/components/CheckboxSelector/SelectionList/SelectionItem/SelectionItem";

interface SelectionProps {
	itemType: string;
	selectedItemCount: number;
	items: SelectionItemProps[];
	className?: string
}

const CheckboxSelector: FunctionComponent<SelectionProps> = ({
	items,
	selectedItemCount,
	itemType,
	className
}) => {
	return <div className={className}>
		<SelectedItemCount selectedItemCount={selectedItemCount} itemType={itemType} />
		<SelectionList
			items={items}
		/>
	</div>
}

export default CheckboxSelector
