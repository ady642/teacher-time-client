import {FunctionComponent, useEffect, useRef, useState} from "react";
import FieldSelectorActivator from "@/modules/Teachers/components/TeacherFilters/FieldSelector/FieldSelectorActivator";
import FieldSelectorList from "@/modules/Teachers/components/TeacherFilters/FieldSelector/FieldSelectorList";
import styles from "@/modules/Teachers/components/TeacherFilters/FieldSelector/fieldSelector.module.scss";
import useClickOutside from "@/common/hooks/useClickOutside";
import {dropdownValue, dropdownValues, setDropdownValue} from "@/common/types/dropdown";

interface FieldSelectorProps {
	values: dropdownValues;
	DDvalue: dropdownValue;
	setValue: setDropdownValue
}

const FieldSelector: FunctionComponent<FieldSelectorProps> = ({ values, DDvalue, setValue }) => {
	const [openedSelector, setOpenedSelector] = useState(false)
	const fieldSelectorRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		setOpenedSelector(false)
	}, [DDvalue.value])
	useClickOutside(fieldSelectorRef, () => setOpenedSelector(false))

	return <div ref={fieldSelectorRef} className={styles.fieldSelector__container}>
		<FieldSelectorActivator label={DDvalue.label} active={openedSelector} onClick={() => setOpenedSelector(!openedSelector)}/>
		<FieldSelectorList setValue={setValue} values={values} opened={openedSelector}/>
	</div>
}

export default FieldSelector
