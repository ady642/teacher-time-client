import {FunctionComponent} from "react";
import FooterColumn from "@/common/components/Footers/FooterColumn";
import InstagramLink from "@/common/components/Links/InstagramLink";

interface SocialProps {

}

const SocialColumn: FunctionComponent<SocialProps> = () => {
	return <FooterColumn title={'Social'}>
		<InstagramLink />
	</FooterColumn>
}

export default SocialColumn
