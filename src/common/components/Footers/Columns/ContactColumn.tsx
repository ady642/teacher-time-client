import {FunctionComponent} from "react";
import FooterColumn from "@/common/components/Footers/FooterColumn";
import MailLink from "@/common/components/Links/MailLink";

interface ContactProps {

}

const ContactColumn: FunctionComponent<ContactProps> = () => {
	return <FooterColumn title={'Contact'}>
		<MailLink />
	</FooterColumn>
}

export default ContactColumn
