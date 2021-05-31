import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import ContactForm from "@/modules/Contact/models/ContactForm";
import ContactField from "@/modules/Contact/components/ContactForm/ContactField";
import Image from 'next/image'

interface ContactFormProps {
    contactForm: ContactForm;
    setContactForm: (contactForm: ContactForm) => void;
    sendMail: () => void
}

const ContactFormContent: FunctionComponent<ContactFormProps> = ({ contactForm, setContactForm, sendMail}) => {
	const { t } = useTranslation()

	return <section className='flex flex-col w-full p-8'>
		<ContactField
			className='mb-4'
			input={contactForm.field}
			setInput={(field: string) => setContactForm({
				...contactForm,
				field
			})}
			label={t('field')}
		>
			<span className={'text-2xl'}>🔘</span>
		</ContactField>
		<ContactField
			className='mb-4'
			input={contactForm.level}
			setInput={(level: string) => setContactForm({
				...contactForm,
				level
			})}
			label={t('level')}
		>
			<Image src={'/img/icon/ladder.png'} width={30} height={30} />
		</ContactField>
		<ContactField
			className='mb-4'
			input={contactForm.email}
			setInput={(email: string) => setContactForm({
				...contactForm,
				email
			})}
			label='Email'
		>
			<span className='text-2xl'>📨</span>
		</ContactField>
		<button
			onClick={() => sendMail()}
			className={'transition-all w-1/3 self-end rounded uppercase p-2 font-medium bg-green-400 text-white text-sm hover:bg-green-600'}>
			{t('send')}
		</button>
	</section>
}

export default ContactFormContent
