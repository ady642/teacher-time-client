import {FunctionComponent} from "react";
import {TextField} from "@material-ui/core";
import SimpleButton from "@/common/components/Buttons/SimpleButton";
import useTranslation from "@/common/hooks/useTranslation";
import ContactForm from "@/modules/Contact/models/ContactForm";

interface ContactFormProps {
    contactForm: ContactForm;
    setContactForm: (contactForm: ContactForm) => void;
    sendMail: () => void
}

const ContactFormContent: FunctionComponent<ContactFormProps> = ({ contactForm, setContactForm, sendMail}) => {
	const { t } = useTranslation()

	const setEmail = (email: string) => {setContactForm({
		...contactForm,
		email
	})
	}

	const setMessage = (message: string) => {
		setContactForm({
			...contactForm,
			message
		})
	}

	return <section className='flex flex-col'>
		<h1 className='uppercase sm:text-2xl text-l mb-6'>{ t('contactUs') }</h1>
		<TextField className='mb-4' value={contactForm.email} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label='Email' variant="outlined" />
		<TextField value={contactForm.message} onChange={(e) => setMessage(e.target.value)}
			id="outlined-basic"
			className='mb-4'
			label='Message' variant="outlined" multiline minRows='5'
		/>
		<SimpleButton className={'self-end sm:w-48 w-full'} text={t('send')} onClick={sendMail} />
	</section>
}

export default ContactFormContent
