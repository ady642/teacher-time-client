import {FunctionComponent} from "react";
import fieldSelectionStyles from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/styles/fieldSelection.module.scss"
import FieldSelectionItemCheckbox
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/FieldSelection/FieldSelectionList/FieldSelectionItemCheckbox";

export interface FieldSelectionItemProps {
    active: boolean;
    label: string;
    icon: any;
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
		{ icon }
		{ label }
	</li>
}

export default FieldSelectionItem
