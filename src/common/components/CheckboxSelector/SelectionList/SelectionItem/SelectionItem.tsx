import {FunctionComponent} from "react";
import checkboxSelectorStyles from "@/common/components/CheckboxSelector/styles/checkboxSelector.module.scss"
import SelectionItemCheckbox
	from "@/common/components/CheckboxSelector/SelectionList/SelectionItem/SelectionItemCheckbox";
import SelectionItemIcon
	from "@/common/components/CheckboxSelector/SelectionList/SelectionItem/SelectionItemIcon";

export interface SelectionItemProps {
    active: boolean;
    label: string;
    icon: string;
    onClick: () => void
}

const SelectionItem: FunctionComponent<SelectionItemProps> = ({
	icon,
	label,
	active,
	onClick
}) => {
	return <li
		className={`${checkboxSelectorStyles['selection__list__item']} ${active ? checkboxSelectorStyles['selection__list__item--active']: '' }`}
		onClick={onClick}>
		<SelectionItemCheckbox
			value={active}
			setValue={onClick}
		/>
		<SelectionItemIcon src={icon}/>
		<div className={checkboxSelectorStyles['selection__list__item__label']}>
			{ label }
		</div>
	</li>
}

export default SelectionItem
