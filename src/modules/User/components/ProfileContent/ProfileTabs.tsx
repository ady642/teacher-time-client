import {FunctionComponent} from "react";
import Tabs, {TabsProps} from "@/common/components/Tabs/Tabs";
import useTranslation from "@/common/hooks/useTranslation";

interface ProfileTabsProps extends Omit<TabsProps, 'tabNames'> {}

const ProfileTabs: FunctionComponent<ProfileTabsProps> = ({ tabSelected, selectTab }) => {
	const { t } = useTranslation()

	const profileTabNames = [t('profile.profile')]

	return <Tabs
		tabNames={profileTabNames}
		selectTab={selectTab}
		tabSelected={tabSelected}
	/>
}

export default ProfileTabs
