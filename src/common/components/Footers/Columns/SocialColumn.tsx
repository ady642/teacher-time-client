import {FunctionComponent} from "react";
import FooterColumn from "@/common/components/Footers/FooterColumn";
import InstagramLink from "@/common/components/Links/InstagramLink";
import FacebookLink from "@/common/components/Links/FacebookLink";

interface SocialProps {

}

const SocialColumn: FunctionComponent<SocialProps> = () => {
	return <FooterColumn title={'Social'}>
		<InstagramLink />
		<FacebookLink />
	</FooterColumn>
}

export default SocialColumn
