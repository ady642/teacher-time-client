import {FunctionComponent} from "react";
import SelectionItem
, {SelectionItemProps} from "@/common/components/CheckboxSelector/SelectionList/SelectionItem/SelectionItem";

interface SelectionListProps {
	items: SelectionItemProps[]
}

const SelectionList: FunctionComponent<SelectionListProps> = ({ items }) => {
	return <>
		{ items.map((item, index) =>
			<SelectionItem
				key={item.label}
				{ ...items[index] }
			/>
		)
		}
	</>
}

export default SelectionList
