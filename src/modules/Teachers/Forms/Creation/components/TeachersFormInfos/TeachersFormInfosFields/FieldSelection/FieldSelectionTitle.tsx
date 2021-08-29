import {FunctionComponent} from "react";
import fieldSelectionStyles from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/styles/fieldSelection.module.scss"

interface FieldSelectionTitleProps {

}

const FieldSelectionTitle: FunctionComponent<FieldSelectionTitleProps> = () => {
	return <h1 className={fieldSelectionStyles['field-selection__title']}>
        Sélectionner votre spécialité
	</h1>
}

export default FieldSelectionTitle
