import {FunctionComponent} from "react";
import { SocialIcon } from 'react-social-icons';

interface InstagramLinkProps {

}

const InstagramLink: FunctionComponent<InstagramLinkProps> = () => {
	return <SocialIcon url="https://www.instagram.com/teacherdashtime" style={{ height: 37, width: 37 }} />
}

export default InstagramLink
