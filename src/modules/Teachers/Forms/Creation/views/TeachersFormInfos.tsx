import {FunctionComponent, useState} from "react";
import TeachersCreateLayout from "@/modules/Teachers/Forms/Creation/layout/TeachersCreateLayout";
import TeacherFormInfosStepper
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosStepper/TeacherFormInfosStepper";
import TeachersFormInfosFields
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/TeachersFormInfosFields";

interface TeachersConnectionProps {

}

const TeachersConnection: FunctionComponent<TeachersConnectionProps> = () => {
	const [step, setStep] = useState(0)

	return <TeachersCreateLayout
		left={<TeacherFormInfosStepper setStep={setStep} step={step}/>}
		right={<TeachersFormInfosFields />}
	/>
}

export default TeachersConnection
