import {FunctionComponent} from "react";
import footerStyles from "@/common/components/Footers/styles/footerStyles.module.scss"
import useRoutePush from "@/common/hooks/useRoutePush";

interface FooterItemProps {
    text: string;
	url: string
}

const FooterItem: FunctionComponent<FooterItemProps> = ({ text, url }) => {
	const { goTo } = useRoutePush()

	return <p onClick={() => goTo(url)} className={footerStyles.item}>
		{ text }
	</p>
}

export default FooterItem
