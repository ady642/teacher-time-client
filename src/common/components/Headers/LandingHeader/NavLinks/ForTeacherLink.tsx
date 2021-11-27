import {FunctionComponent, useEffect, useState} from "react";
import NavLink from "@/common/components/Headers/LandingHeader/NavLinks/NavLink";
import useTranslation from "@/common/hooks/useTranslation";
import useRoutePush from "@/common/hooks/useRoutePush";

interface ForTeacherLinkProps {

}

const ForTeacherLink: FunctionComponent<ForTeacherLinkProps> = () => {
	const { t } = useTranslation()
	const [isActive, setIsActive] = useState(false)

	const { goTo, router } = useRoutePush()

	const goToTeacherLanding = async () => {
		await goTo('landing/teacher')
	}

	useEffect(() => {
		if(router.pathname === '/landing/teacher') {
			setIsActive(true)
		}
	}, [])

	return <NavLink
		title={t('landing.forTeacher')}
		onClick={goToTeacherLanding}
		isActive={isActive}
	/>
}

export default ForTeacherLink
