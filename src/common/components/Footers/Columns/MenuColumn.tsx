import {FunctionComponent} from "react";
import FooterColumn from "@/common/components/Footers/FooterColumn";
import useTranslation from "@/common/hooks/useTranslation";
import FooterItem from "@/common/components/Footers/FooterItem";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import { Switch, Case } from "react-switch-case-module"
import AvailableSwitch from "@/modules/Teachers/List/components/AvailableSwitch";

interface MenuProps {

}

const MenuColumn: FunctionComponent<MenuProps> = () => {
	const { t } = useTranslation()
	const { teacher } = useUserGetters()

	return <FooterColumn title={'Menu'}>
		<>
			 <FooterItem  key={t('common.findAteacher')} text={t('common.findAteacher')} url={'teachers/list'} />
			<Switch componentName={teacher ? "AvailableSwitch": 'FooterItem'} defaultComponent={<FooterItem  key={t('common.giveClasses')} text={t('common.giveClasses')} url={'teachers/create'} />}>
				<Case value={'FooterItem'}>
					<FooterItem  key={t('common.giveClasses')} text={t('common.giveClasses')} url={'teachers/create'} />
				</Case>
				<Case value={'AvailableSwitch'}>
					<AvailableSwitch />
				</Case>
			</Switch>
		</>
	</FooterColumn>
}

export default MenuColumn
