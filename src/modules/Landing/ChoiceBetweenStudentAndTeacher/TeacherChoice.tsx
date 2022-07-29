import React, {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import useRoutePush from "@/common/hooks/useRoutePush";
import Choice from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/Choice/Choice";
import ChoiceButton from "@/modules/Landing/ChoiceBetweenStudentAndTeacher/Choice/ChoiceButton";

interface TeacherChoiceProps {

}

const TeacherChoice: FunctionComponent<TeacherChoiceProps> = () => {
	const { t } = useTranslation()
	const { goTo } = useRoutePush()

	const goToTeacherCreate = async () => {
		await goTo('teachers/create')
	}

	const goToTeacherLogin = async () => {
		await goTo('teachers/create', { toLogin: true })
	}

	return <Choice
		title={t('landing.teacherTitle')}
		subtitle={t('landing.teacherSubtitle')}
		imgSource={'img/teacher.png'}
		onButtonClick={goToTeacherLogin}
		buttonSlot={
			<ChoiceButton
				outlined={true}
				onClick={goToTeacherCreate}
				label={t('common.register')}
			/>
		}
		buttonLabel={t('common.login')}
	/>
}

export default TeacherChoice
