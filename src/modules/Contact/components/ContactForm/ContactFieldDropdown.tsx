import {FunctionComponent, useEffect, useState} from "react";
import ContactField from "@/modules/Contact/components/ContactForm/ContactField";
import ContactFieldDropdownElement from "@/modules/Contact/components/ContactForm/ContactFieldDropdownElement";
import styles from "@/modules/Contact/styles/contact.module.scss";

interface ContactFieldDropdownProps {
	value: string;
	label: string;
	className?: string;
	items: { onClick: (itemTitle: string) => void, title: string }[];
}

const ContactFieldDropdown: FunctionComponent<ContactFieldDropdownProps> = ({ value, items, className, label }) => {
	const [active, setActive] = useState<Boolean>(false)

	return <ContactField className={`${className} cursor-pointer`} onClick={() => setActive(!active)} prependIcon={<div>🌀</div>} label={label} active={active}>
		<div className={"ml-6 text-lg"}>
			{ value }
		</div>
		{ active && <div className={styles.contactFieldDropDownList}>
			{ items.map(({title, onClick}) => <ContactFieldDropdownElement key={title} title={title} onClick={onClick} />) }
		</div> }
	</ContactField>
}

export default ContactFieldDropdown
