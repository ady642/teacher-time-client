import {ChangeEvent, FunctionComponent} from "react";
import styles from '@/modules/Contact/styles/contact.module.scss'

interface ContactFieldProps {
    input: string;
    setInput: (input: string) => void;
    label: string;
    className?: string;
    children: any
}

const ContactField: FunctionComponent<ContactFieldProps> = ({ input, setInput, children, label, className }) => {
	return <div className={`${className} relative flex flex-col`}>
		<label className={'text-black mb-2 text-xl capitalize'}>{label}</label>
		<div className={styles.prependIcon}>
			{ children }
		</div>
		<div className={`${styles.contactFieldInputContainer} border-2 text-md text-black border-solid p-4 rounded-lg transition duration-500`}>
			<input
				className={styles.contactFieldInput}
				value={input}
				onChange={(e: ChangeEvent<HTMLInputElement>) => { setInput(e.target.value) }}
			/>
		</div>
	</div>
}

export default ContactField
