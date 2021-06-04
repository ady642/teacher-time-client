import {FunctionComponent} from "react";
import styles from '@/modules/Contact/styles/contact.module.scss'

interface ContactFieldProps {
    label: string;
    className?: string;
    prependIcon: any;
    children: any;
    onClick?: Function;
    active?: Boolean
}

const ContactField: FunctionComponent<ContactFieldProps> = ({ onClick = () => {}, active = false,  prependIcon, label, children, className }) => {
	return <div id={label} onClick={() => onClick()} className={`${className} relative flex flex-col`}>
		<label className={'text-black mb-2 text-xl capitalize'}>{label}</label>
		<div className={styles.prependIcon}>
			{ prependIcon }
		</div>
		<div className={`${styles.contactFieldInputContainer} ${active ? styles.contactFieldDropDownOpened : ''} border-2 text-md text-black border-solid p-4 rounded-lg`}>
			{ children }
		</div>
	</div>
}

export default ContactField
