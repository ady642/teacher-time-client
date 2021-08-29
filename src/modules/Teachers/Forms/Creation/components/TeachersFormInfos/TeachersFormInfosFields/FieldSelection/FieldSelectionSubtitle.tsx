import {FunctionComponent} from "react";
import fieldSelectionStyles from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/styles/fieldSelection.module.scss"

interface FieldSelectionTitleProps {

}

const FieldSelectionTitle: FunctionComponent<FieldSelectionTitleProps> = () => {
	return <h4 className={fieldSelectionStyles['field-selection__subtitle']}>
        Choisissez les matières que vous souhaitez enseigner. Vous pouvez en choisir plusieurs
	</h4>
}

export default FieldSelectionTitle
