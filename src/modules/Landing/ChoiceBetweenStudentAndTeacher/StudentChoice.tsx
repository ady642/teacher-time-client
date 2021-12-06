import {FunctionComponent} from "react";
import Choice from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/Choice/Choice";
import useTranslation from "@/common/hooks/useTranslation";
import useRoutePush from "@/common/hooks/useRoutePush";

interface StudentChoiceProps {

}

const StudentChoice: FunctionComponent<StudentChoiceProps> = () => {
	const { t } = useTranslation()
	const { goTo } = useRoutePush()

	const goToStudentLanding = async () => {
		await goTo('landing/student')
	}

	return <Choice
		title={t('landing.studentTitle')}
		subtitle={t('landing.studentSubtitle')}
		imgSource={'img/student.png'}
		onButtonClick={() => goToStudentLanding()}
	/>
}

export default StudentChoice
