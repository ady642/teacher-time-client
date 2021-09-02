import {FunctionComponent} from "react";
import fieldSelectionStyles from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/styles/fieldSelection.module.scss"

interface FieldSubtitleProps {
	subtitle: string
}

const FieldSubtitle: FunctionComponent<FieldSubtitleProps> = ({ subtitle }) => {
	return <h4 className={fieldSelectionStyles['field-selection__subtitle']}>
		{ subtitle }
	</h4>
}

export default FieldSubtitle
