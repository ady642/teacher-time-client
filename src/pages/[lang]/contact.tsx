import {FunctionComponent, useEffect, useState} from "react";
import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {getInitialLocale} from "@/translations/getInitialLocale";
import ContactForm from "@/modules/Contact/components/ContactForm/ContactForm";
import ContactFormModel from '@/modules/Contact/models/ContactForm'
import AboutText from "@/modules/Contact/components/AboutText";
import TailwindCard from "@/common/components/Cards/TailwindCard";
import ContactClient from "@/modules/Contact/client/ContactClient";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import styles from "@/common/styles/WhiteHeader.module.scss"
import MailConfirmationModal from "@/modules/Contact/components/ContactForm/MailConfirmationModal";

interface ContactProps {

}

const Contact: FunctionComponent<ContactProps> = ({ localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const [locale, setLocale] = useState('')
	const [contactForm, setContactForm] = useState(new ContactFormModel())
	const [mailConfirmationOpened, setMailConfirmation] = useState(false)
	const contactClient = new ContactClient('')


	const sendMail = async () => {
		try {
			await contactClient.sendMail(contactForm)
			setMailConfirmation(true)
		} catch (e) {
			alert (e.message)
		}
	}

	useEffect(() => {
		setLocale(getInitialLocale())
	}, []);

	return <LanguageProvider localization={localization}>
		<WhiteHeaderLayout className={`bg-gray-400 lg:h-full h-auto mb-16 overflow-hidden`} locale={locale}>
			<section className='flex lg:flex-row flex-col sm:p-16 p-4 w-full justify-between flex-wrap'>
				<AboutText />
				<TailwindCard className={'lg:w-2/5 lg:mt-0 mt-10 lg:mb-0 mb-12 w-full text-white bg-gray-200'}>
					<ContactForm contactForm={contactForm} setContactForm={setContactForm} sendMail={sendMail} />
				</TailwindCard>
			</section>
			<MailConfirmationModal open={mailConfirmationOpened} handleClose={() => setMailConfirmation(false)} />
		</WhiteHeaderLayout>
	</LanguageProvider>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const localization = getLocalizationProps(ctx, "contact");

	return { props: { localization } }
}

export default Contact
