import {FunctionComponent} from "react";
import { Fields } from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/FieldSelection/FieldSelectionIntegration";

interface TeacherCardFieldsProps {
    fields: string[]
}

const TeacherCardFields: FunctionComponent<TeacherCardFieldsProps> = ({ fields }) => {
	const fieldsName: Record<string, string> = {
		[Fields.SPANISH]: 'Espagnol',
		[Fields.ENGLISH]: 'Anglais',
		[Fields.MATHS]: 'Mathématiques',
		[Fields.PHILOSOPHY]: 'Philosophie',
		[Fields.HISTORY]: 'Histoire',
		[Fields.FRENCH]: 'Français'
	}

	return <div className={'flex flex-wrap gap-1'}>
		{fields.map((field) => <span className={'text-blueviolet font-bold py-0.5 px-3 border-2 rounded-xl'} key={field}>{fieldsName[field]}</span>)}
	</div>
}

export default TeacherCardFields
