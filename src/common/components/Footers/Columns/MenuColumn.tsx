import {FunctionComponent} from "react";
import FooterColumn from "@/common/components/Footers/FooterColumn";
import useTranslation from "@/common/hooks/useTranslation";
import FooterItem from "@/common/components/Footers/FooterItem";

interface MenuProps {

}

const MenuColumn: FunctionComponent<MenuProps> = () => {
	const { t } = useTranslation()

	const items = [{ text: t('common.findAteacher'), url: 'teachers/list' }, { text: t('common.giveClasses'), url: 'teachers/create' }]

	return <FooterColumn title={'Menu'}>
		<>
			{ items.map((item) => <FooterItem  key={item.text} text={item.text} url={item.url} />) }
		</>
	</FooterColumn>
}

export default MenuColumn
