import {FunctionComponent, useEffect, useState} from "react";
import NavLink from "@/common/components/Headers/LandingHeader/NavLinks/NavLink";
import useTranslation from "@/common/hooks/useTranslation";
import useRoutePush from "@/common/hooks/useRoutePush";

interface ForStudentLinkProps {

}

const ForStudentLink: FunctionComponent<ForStudentLinkProps> = () => {
	const { t } = useTranslation()
	const [isActive, setIsActive] = useState(false)

	const { goTo, router } = useRoutePush()

	const goToTeacherLanding = async () => {
		await goTo('landing/student')
	}

	useEffect(() => {
		if(router.pathname === '/landing/student') {
			setIsActive(true)
		}
	}, [])

	return <NavLink
		title={t('landing.forStudent')}
		onClick={goToTeacherLanding}
		isActive={isActive}
	/>
}

export default ForStudentLink
