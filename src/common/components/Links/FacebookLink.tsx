import {FunctionComponent} from "react";
import {SocialIcon} from "react-social-icons";

interface FacebookLinkProps {
	className?: string
}

const FacebookLink: FunctionComponent<FacebookLinkProps> = ({ className }) => {
	return <SocialIcon className={className} url="https://www.facebook.com/Teacher-time-100527562425660" style={{ height: 37, width: 37 }} />
}

export default FacebookLink
