import {FunctionComponent, useEffect, useRef} from "react";
import {dropdownValue, dropdownValues, setDropdownValue} from "@/common/types/dropdown";
import useClickOutside from "@/common/hooks/useClickOutside";
import DropdownList from "@/common/components/Dropdowns/DropdownList";
import DropdownActivator from "@/common/components/Dropdowns/DropdownActivator";
import styles from "@/common/components/Dropdowns/fieldSelector.module.scss";
import classNames from "classnames";

interface DropdownProps {
    values: dropdownValues;
    DDvalue: dropdownValue;
    setValue: setDropdownValue;
    activator?: JSX.Element;
    opened: boolean;
    setOpened: (opened: boolean) => void;
    className?: string;
}

const Dropdown: FunctionComponent<DropdownProps> = ({
	values,
	DDvalue,
	setValue,
	opened,
	setOpened,
	activator = <DropdownActivator label={DDvalue.label} active={opened} onClick={() => setOpened(!opened)}/>,
	className = styles['fieldSelector__container--default']
}) => {
	const fieldSelectorRef = useRef<HTMLDivElement>(null)

	const containerClasses = classNames([styles.fieldSelector__container, className])

	useEffect(() => {
		setOpened(false)
	}, [DDvalue.value])

	useClickOutside([fieldSelectorRef], () => setOpened(false))

	return <div ref={fieldSelectorRef} className={containerClasses}>
		{ activator }
		<DropdownList setValue={setValue} values={values} opened={opened}/>
	</div>
}

export default Dropdown
