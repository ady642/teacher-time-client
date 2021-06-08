import {ChangeEvent, FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import ContactForm from "@/modules/Contact/models/ContactForm";
import ContactField from "@/modules/Contact/components/ContactForm/ContactField";
import ContactFieldDropdown from "@/modules/Contact/components/ContactForm/ContactFieldDropdown";
import styles from "@/modules/Contact/styles/contact.module.scss"

interface ContactFormProps {
    contactForm: ContactForm;
    setContactForm: (contactForm: ContactForm) => void;
    sendMail: () => void
}

const ContactFormContent: FunctionComponent<ContactFormProps> = ({ contactForm, setContactForm, sendMail}) => {
	const { t } = useTranslation()

	const itemsField = [{
		onClick: () => { setContactForm({
			...contactForm,
			field: 'Mathématiques'
		}) },
		title: 'Mathématiques'
	}, {
		onClick: () => { setContactForm({
			...contactForm,
			field: 'Français'
		}) },
		title: 'Français'
	}, {
		onClick: () => { setContactForm({
			...contactForm,
			field: 'Anglais'
		}) },
		title: 'Anglais'
	}]

	const itemsLevel = [{
		onClick: () => { setContactForm({
			...contactForm,
			level: 'Primaire'
		}) },
		title: 'Primaire'
	}, {
		onClick: () => { setContactForm({
			...contactForm,
			level: 'Collège'
		}) },
		title: 'Collège'
	}, {
		onClick: () => { setContactForm({
			...contactForm,
			level: 'Lycée'
		}) },
		title: 'Lycée'
	}, {
		onClick: () => { setContactForm({
			...contactForm,
			level: 'Autre'
		}) },
		title: 'Autre'
	}]

	return <section className='flex flex-col w-full p-8'>
		<p className={'uppercase text-center mb-4'}>
			Prise de contact
		</p>
		<ContactFieldDropdown
			className={'mb-4'}
			label={'Discipline'}
			value={contactForm.field}
			items={itemsField}
		/>
		<ContactFieldDropdown
			className={'mb-4'}
			label={'Niveau'}
			items={itemsLevel}
			value={contactForm.level}
		/>
		<ContactField
			className='mb-4'
			label='Email'
		 prependIcon={'📨'}>
			<input
				className={styles.contactFieldInput}
				value={contactForm.email}
				onChange={(e: ChangeEvent<HTMLInputElement>) => { setContactForm({
					...contactForm,
					email: e.target.value
				}) }}
			/>
		</ContactField>
		<ContactField
			className='mb-4'
			label='Commentaires'
			prependIcon={'💬'}>
			<textarea
				className={`${styles.contactFieldInput} text-black border-none outline-none`}
				value={contactForm.message}
				onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { setContactForm({
					...contactForm,
					message: e.target.value
				}) }}
			/>
		</ContactField>
		<button
			onClick={() => sendMail()}
			className={'transition-all w-1/3 self-end rounded uppercase p-2 font-medium bg-green-400 text-white text-sm hover:bg-green-600'}>
			{t('send')}
		</button>
	</section>
}

export default ContactFormContent
