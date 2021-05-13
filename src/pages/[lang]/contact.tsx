import {FunctionComponent, useEffect, useState} from "react";
import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import DefaultLayout from "@/common/layouts/DefaultLayout";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {getInitialLocale} from "@/translations/getInitialLocale";
import ContactForm from "@/modules/Contact/components/ContactForm";
import ContactFormModel from '@/modules/Contact/models/ContactForm'
import AboutCard from "@/modules/Contact/components/AboutCard";
import TailwindCard from "@/common/components/Cards/TailwindCard";
import InfoCard from "@/modules/Contact/components/InfoCard";
import {PhoneInTalk} from "@material-ui/icons";
import InfoCards from "@/modules/Contact/components/InfoCards";

interface ContactProps {

}

const Contact: FunctionComponent<ContactProps> = ({ localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const [locale, setLocale] = useState('')
	const [contactForm, setContactForm] = useState(new ContactFormModel())

	const sendMail = () => {
		console.log('jenvoie le mail')
	}

	useEffect(() => {
		setLocale(getInitialLocale())
	}, []);

	return <LanguageProvider localization={localization}>
		<DefaultLayout locale={locale}>
			<div className='p-8'>
				<TailwindCard>
					<section className='flex p-8 w-full	'>

						<div className={'mr-10 flex-1'}>
							<ContactForm contactForm={contactForm} setContactForm={setContactForm} sendMail={sendMail} />
						</div>
						<div className={'w-96 mt-10'}>
							<AboutCard />
						</div>
					</section>
				</TailwindCard>
				<TailwindCard>
					<InfoCards />
				</TailwindCard>
			</div>
		</DefaultLayout>
	</LanguageProvider>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const localization = getLocalizationProps(ctx, "contact");

	return { props: { localization } }
}
export default Contact
