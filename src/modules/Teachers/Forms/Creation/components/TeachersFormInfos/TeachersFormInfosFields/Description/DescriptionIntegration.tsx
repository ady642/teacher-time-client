import {ChangeEvent, FunctionComponent} from "react";
import fieldSelectionStyles
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/styles/fieldSelection.module.scss";

interface DescriptionIntegrationProps {
    description: string;
    setDescription: (description: string) => void
}

const DescriptionIntegration: FunctionComponent<DescriptionIntegrationProps> = ({ description, setDescription }) => {
	return <textarea
		className={fieldSelectionStyles['description']}
		value={description}
		onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { setDescription(e.target.value)}}
	/>
}

export default DescriptionIntegration
