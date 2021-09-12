import {FunctionComponent} from "react";
import checkboxSelectorStyles from "@/common/components/CheckboxSelector/styles/checkboxSelector.module.scss"

interface SelectionItemIconProps {
	src: string
}

const SelectionItemIcon: FunctionComponent<SelectionItemIconProps> = ({ src }) => {
	return <img alt={'pi'} src={src} className={checkboxSelectorStyles['selection__list__item__icon']} />
}

export default SelectionItemIcon
