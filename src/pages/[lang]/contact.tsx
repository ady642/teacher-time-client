import {FunctionComponent, useEffect, useState} from "react";
import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {getInitialLocale} from "@/translations/getInitialLocale";
import ContactForm from "@/modules/Contact/components/ContactForm";
import ContactFormModel from '@/modules/Contact/models/ContactForm'
import AboutCard from "@/modules/Contact/components/AboutCard";
import TailwindCard from "@/common/components/Cards/TailwindCard";
import InfoCards from "@/modules/Contact/components/InfoCards";
import styles from '@/modules/Contact/styles/contact.module.scss'
import ContactClient from "@/modules/Contact/client/ContactClient";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";

interface ContactProps {

}

const Contact: FunctionComponent<ContactProps> = ({ localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const [locale, setLocale] = useState('')
	const [contactForm, setContactForm] = useState(new ContactFormModel())
	const contactClient = new ContactClient('')

	const sendMail = async () => {
		try {
			await contactClient.sendMail(contactForm)
			alert('Votre message a été envoyé !')
		} catch (e) {
			alert (e.message)
		}
	}

	useEffect(() => {
		setLocale(getInitialLocale())
	}, []);

	return <LanguageProvider localization={localization}>
		<WhiteHeaderLayout locale={locale}>
			<div className='p-8'>
				<TailwindCard>
					<section className='flex p-8 w-full	flex-wrap'>
						<div className={'sm:mr-10 mr-0 flex-1'}>
							<ContactForm contactForm={contactForm} setContactForm={setContactForm} sendMail={sendMail} />
						</div>
						<div className={`${styles.aboutContainer} mt-10`}>
							<AboutCard />
						</div>
					</section>
				</TailwindCard>
				<TailwindCard>
					<InfoCards />
				</TailwindCard>
			</div>
		</WhiteHeaderLayout>
	</LanguageProvider>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const localization = getLocalizationProps(ctx, "contact");

	return { props: { localization } }
}

export default Contact
