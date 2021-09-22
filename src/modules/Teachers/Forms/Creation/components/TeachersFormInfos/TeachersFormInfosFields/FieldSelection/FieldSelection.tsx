import {FunctionComponent, useEffect, useState} from "react";
import CheckboxSelector from "@/common/components/CheckboxSelector/CheckboxSelector";
import {SelectionItemProps} from "@/common/components/CheckboxSelector/SelectionList/SelectionItem/SelectionItem";
import TeacherCreationForm
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/models/TeacherCreationForm";
import useObject from "@/common/hooks/useObject";

interface FieldSelectionProps {
	setTeacherCreationForm: (teacherCreationForm: TeacherCreationForm) => void;
	teacherCreationForm: TeacherCreationForm
}

const FieldSelection: FunctionComponent<FieldSelectionProps> = ({ teacherCreationForm, setTeacherCreationForm }) => {
	const [selectedFields, setSelectedFields] = useState<Set<string>>(() => teacherCreationForm.fields);
	const { setObject } = useObject()

	const addField = (field: string) => {
		setSelectedFields((prev) => new Set(prev).add(field));
	}

	const removeField = (field: string) => {
		setSelectedFields(prev => {
			const next = new Set(prev);

			next.delete(field);

			return next;
		});
	}

	enum Fields {
		MATHS = 'maths',
		ENGLISH = 'english',
		FRENCH = 'french',
		SPANISH = 'spanish'
	}

	useEffect(() =>{
		setObject('fields', selectedFields, teacherCreationForm, setTeacherCreationForm)
	}, [selectedFields])

	const fields: SelectionItemProps[] = [
		{
			active: selectedFields.has(Fields.MATHS),
			label: "Mathématiques",
			icon: '/img/icon/pi.svg',
			onClick: () => selectedFields.has(Fields.MATHS) ? removeField(Fields.MATHS): addField(Fields.MATHS)
		},
		{
			active: selectedFields.has(Fields.ENGLISH),
			label: "Anglais",
			icon: '/img/icon/ingles.svg',
			onClick: () => selectedFields.has(Fields.ENGLISH) ? removeField(Fields.ENGLISH): addField(Fields.ENGLISH)
		},
		{
			active: selectedFields.has(Fields.FRENCH),
			label: "Français",
			icon: '/img/icon/francia.png',
			onClick: () => selectedFields.has(Fields.FRENCH) ? removeField(Fields.FRENCH): addField(Fields.FRENCH)
		},
		{
			active: selectedFields.has(Fields.SPANISH),
			label: "Espagnol",
			icon: '/img/icon/espana.png',
			onClick: () => selectedFields.has(Fields.SPANISH) ? removeField(Fields.SPANISH): addField(Fields.SPANISH)
		}
	]

	return <CheckboxSelector
		itemType={'Matières'}
		selectedItemCount={selectedFields.size}
		items={fields}
	/>
}

export default FieldSelection