import {FunctionComponent} from "react";
import fieldSelectionStyles from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/styles/fieldSelection.module.scss"
import FieldSelectionItemCheckbox
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/FieldSelection/FieldSelectionList/FieldSelectionItem/FieldSelectionItemCheckbox";
import FieldSelectionItemIcon
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/FieldSelection/FieldSelectionList/FieldSelectionItem/FieldSelectionItemIcon";

export interface FieldSelectionItemProps {
    active: boolean;
    label: string;
    icon: string;
    onClick: () => void
}

const FieldSelectionItem: FunctionComponent<FieldSelectionItemProps> = ({
	icon,
	label,
	active,
	onClick
}) => {
	return <li
		className={`${fieldSelectionStyles['field-selection__list__item']} ${active ? fieldSelectionStyles['field-selection__list__item--active']: '' }`}
		onClick={onClick}>
		<FieldSelectionItemCheckbox
			value={active}
			setValue={onClick}
		/>
		<FieldSelectionItemIcon src={icon}/>
		<div className={fieldSelectionStyles['field-selection__list__item__label']}>
			{ label }
		</div>
	</li>
}

export default FieldSelectionItem
