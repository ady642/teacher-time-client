import {FunctionComponent, useState} from "react";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import { House, MailOutline} from "@material-ui/icons";
import {useRouter} from "next/router";

interface BottomBarProps {
    locale: string
}

const BottomBar: FunctionComponent<BottomBarProps> = ({ locale }) => {
	const [value, setValue] = useState(0)
	const router = useRouter()

	const goToContact = async () => {
	    await router.push(`/${locale}/contact`)
	}

	const goToTeachersList = async () => {
		await router.push(`/${locale}`)
	}

	return <BottomNavigation
		value={value}
		onChange={(event, newValue) => {
			setValue(newValue);
		}}
		showLabels
		color={'primary'}
		className={'md:hidden fixed bottom-0 z-50 w-full'}
	>
		<BottomNavigationAction onClick={goToTeachersList} label={'Home'} icon={<House />} />
		<BottomNavigationAction onClick={goToContact} label="Contact" icon={<MailOutline />} />
	</BottomNavigation>
}

export default BottomBar
