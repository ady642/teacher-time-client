import {FunctionComponent} from "react";

interface MailLinkProps {
	className?: string;
}

const MailLink: FunctionComponent<MailLinkProps> = ({ className }) => {
	return <a href="mailto:webmaster@teacher.com" className={`pointer font-bold text-blue-400 ${className}`}>
		webmaster@teacher-time.com
	</a>

}

export default MailLink
