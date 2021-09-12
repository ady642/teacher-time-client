import {FunctionComponent} from "react";
import fieldSelectionStyles from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/styles/fieldSelection.module.scss"

interface FieldSelectionTitleProps {
	title: string
}

const FieldTitle: FunctionComponent<FieldSelectionTitleProps> = ({ title }) => {
	return <h1 className={fieldSelectionStyles['field-selection__title']}>
		{ title }
	</h1>
}

export default FieldTitle
