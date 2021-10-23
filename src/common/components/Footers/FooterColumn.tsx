import {FunctionComponent} from "react";
import footerStyles from '@/common/components/Footers/styles/footerStyles.module.scss'

interface FooterColumnProps {
    title: string;
}

const FooterColumn: FunctionComponent<FooterColumnProps> = ({ title, children }) => {
	return <div className={footerStyles.column}>
		<h1 className={footerStyles.title}>
			{ title }
		</h1>
		{ children }
	</div>
}

export default FooterColumn
