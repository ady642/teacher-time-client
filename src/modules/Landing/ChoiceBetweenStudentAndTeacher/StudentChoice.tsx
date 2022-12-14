import {FunctionComponent} from "react";
import Choice from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/Choice/Choice";
import useTranslation from "@/common/hooks/useTranslation";
import useRoutePush from "@/common/hooks/useRoutePush";
import useCookies from "@/common/hooks/useCookies";

interface StudentChoiceProps {

}

const StudentChoice: FunctionComponent<StudentChoiceProps> = () => {
	const { t } = useTranslation()
	const { goTo } = useRoutePush()
	const { setCookie } = useCookies()

	const goToStudentLanding = async () => {
		setCookie('initialChoice', 'student')
		await goTo('teachers/list')
	}

	return <Choice
		title={t('landing.studentTitle')}
		subtitle={t('landing.studentSubtitle')}
		imgSource={'img/student.png'}
		onButtonClick={() => goToStudentLanding()}
		buttonLabel={t('common.teachersList')}
	/>
}

export default StudentChoice
