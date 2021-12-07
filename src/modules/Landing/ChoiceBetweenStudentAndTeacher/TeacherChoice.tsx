import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import useRoutePush from "@/common/hooks/useRoutePush";
import Choice from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/Choice/Choice";
import useCookies from "@/common/hooks/useCookies";

interface TeacherChoiceProps {

}

const TeacherChoice: FunctionComponent<TeacherChoiceProps> = () => {
	const { t } = useTranslation()
	const { goTo } = useRoutePush()
	const { setCookie } = useCookies()

	const goToTeacherLanding = async () => {
		setCookie('initialChoice', 'teacher')
		await goTo('landing/teacher')
	}

	return <Choice
		title={t('landing.teacherTitle')}
		subtitle={t('landing.teacherSubtitle')}
		imgSource={'img/teacher.png'}
		onButtonClick={() => goToTeacherLanding()}
		outlinedButton={true}
	/>
}

export default TeacherChoice
