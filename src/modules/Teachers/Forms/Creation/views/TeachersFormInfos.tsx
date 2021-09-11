import {FunctionComponent, useEffect, useState} from "react";
import TeachersCreateLayout from "@/modules/Teachers/Forms/Creation/layout/TeachersCreateLayout";
import TeacherFormInfosStepper
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosStepper/TeacherFormInfosStepper";
import TeachersFormInfosFields
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/TeachersFormInfosFields";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import useTeacherClient from "@/modules/Teachers/services/useTeacherClient";
import useRoutePush from "@/common/hooks/useRoutePush";

interface TeachersConnectionProps {

}

const TeachersConnection: FunctionComponent<TeachersConnectionProps> = () => {
	const [step, setStep] = useState(1)

	const { teacher } = useUserGetters()
	const { getTeacher } = useTeacherClient()
	const { goTo } =  useRoutePush()

	const checkIsTeacherExists = async () => {
		await getTeacher()
	}

	useEffect(() => {
		const asyncGetTeacher = async () => {
			await checkIsTeacherExists()
		}

		asyncGetTeacher()
	}, [])


	useEffect(() => {
		if(teacher?._id) {
			goTo('fr', '/')
		}
	}, [teacher])

	return <TeachersCreateLayout
		left={<TeacherFormInfosStepper setStep={setStep} step={step} />}
		right={<TeachersFormInfosFields setStep={setStep} step={step} />}
	/>
}

export default TeachersConnection
