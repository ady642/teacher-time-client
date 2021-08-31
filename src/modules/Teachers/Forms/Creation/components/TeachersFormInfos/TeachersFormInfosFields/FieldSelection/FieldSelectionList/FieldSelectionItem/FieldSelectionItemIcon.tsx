import {FunctionComponent} from "react";
import fieldSelectionStyles from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/styles/fieldSelection.module.scss"

interface FieldSelectionItemIconProps {
	src: string
}

const FieldSelectionItemIcon: FunctionComponent<FieldSelectionItemIconProps> = ({ src }) => {
	return <img alt={'pi'} src={src} className={fieldSelectionStyles['field-selection__list__item__icon']} />
}

export default FieldSelectionItemIcon
