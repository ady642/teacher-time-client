import {FunctionComponent} from "react";
import footerStyles from "@/common/components/Footers/styles/footerStyles.module.scss"
import MenuColumn from "@/common/components/Footers/Columns/MenuColumn";
import ContactColumn from "@/common/components/Footers/Columns/ContactColumn";
import SocialColumn from "@/common/components/Footers/Columns/SocialColumn";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
	return <div className={footerStyles.container}>
		<MenuColumn />
		<ContactColumn />
		<SocialColumn />
	</div>
}

export default Footer
