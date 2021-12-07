import { FunctionComponent, useEffect, useState } from "react";
import { Switch, Case} from "react-switch-case-module"
import FieldSelection
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/FieldSelection/FieldSelection";
import {
	Step,
	StepperProps
} from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosStepper/types";
import FieldTitle
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/FieldTitle";
import FieldSubtitle
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/FieldSubtitle";
import TeachersFormInfosFieldsButtons
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/TeachersFormInfosFieldsButtons/TeachersFormInfosFieldsButtons";
import useTranslation from "@/common/hooks/useTranslation";
import fieldSelectionStyles
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/styles/fieldSelection.module.scss";
import Description
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Description/Description";
import TeacherCreationForm
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/models/TeacherCreationForm";
import LevelSelection
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Level/LevelSelection";
import HourlyRateInput
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/HourlyRate/HourlyRateInput";
import ErrorMessage from "@/common/components/Errors/ErrorMessage";
import useTeacherClient from "@/modules/Teachers/services/useTeacherClient";
import useRoutePush from "@/common/hooks/useRoutePush";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";

interface TeachersFormInfosFieldsProps extends StepperProps {

}

const TeachersFormInfosFields: FunctionComponent<TeachersFormInfosFieldsProps> = ({ setStep, step }) => {
	const [title, setTitle] = useState('teachers.form.creation.fields.title')
	const [subtitle, setSubtitle] = useState('teachers.form.creation.fields.subtitle')
	const [componentName, setComponentName] = useState('Field')
	const { t } = useTranslation()
	const [teacherCreationForm, setTeacherCreationForm] = useState(new TeacherCreationForm())
	const { createTeacher, error } = useTeacherClient()
	const { token } = useAuthGetters()
	const { teacher } = useUserGetters()
	const { goTo } = useRoutePush()

	interface stepMappingComponentInterface {
		componentName: string;
		title: string;
		subtitle: string;
	}

	const stepMappingComponent: Record<number, stepMappingComponentInterface> = {
		[Step.FIELD]: {
			componentName: 'Field', title: 'teachers.form.creation.fields.title', subtitle: 'teachers.form.creation.fields.subtitle'
		},
		[Step.DESCRIPTION]: {
			componentName: 'Description', title: 'teachers.form.creation.description.title', subtitle: 'teachers.form.creation.description.subtitle'
		},
		[Step.LEVEL]: {
			componentName: 'Level', title: 'teachers.form.creation.level.title', subtitle: 'teachers.form.creation.level.subtitle'
		},
		[Step.HOURLY_RATE]: {
			componentName: 'HourlyRate', title: 'teachers.form.creation.hourlyRate.title', subtitle: 'teachers.form.creation.hourlyRate.subtitle'
		},
		[Step.DIPLOMA]: {
			componentName: 'Field', title: 'teachers.form.creation.fields.title', subtitle: 'teachers.form.creation.fields.subtitle'
		}
	}

	const nextStep = () => {
		if(step < 4)
			setStep(step + 1)
	}

	const previousStep = () => {
		if(step > 1)
			setStep(step - 1)
	}

	useEffect(() => {
		setComponentName(stepMappingComponent[step].componentName)
		setTitle(stepMappingComponent[step].title)
		setSubtitle(stepMappingComponent[step].subtitle)
	}, [step])

	useEffect(() => {

	}, [token])

	useEffect(() => {
		if(teacher) {
			goTo('home')
		}
	}, [teacher])

	return <>
		<header>
			<FieldTitle title={t(title)} />
			<FieldSubtitle subtitle={t(subtitle)} />
		</header>
		<section className={fieldSelectionStyles['field-selection__content']}>
			<Switch defaultComponent={<div/>} componentName={componentName}>
				<Case value={'Field'}>
					<FieldSelection
						teacherCreationForm={teacherCreationForm}
						setTeacherCreationForm={setTeacherCreationForm}
					/>
				</Case>
				<Case value={'Description'}>
					<Description
						setTeacherCreationForm={setTeacherCreationForm}
						teacherCreationForm={teacherCreationForm}
					/>
				</Case>
				<Case value={'Level'}>
					<LevelSelection
						teacherCreationForm={teacherCreationForm}
						setTeacherCreationForm={setTeacherCreationForm}
					/>
				</Case>
				<Case value={'HourlyRate'}>
					<HourlyRateInput
						setTeacherCreationForm={setTeacherCreationForm}
						teacherCreationForm={teacherCreationForm}
					/>
				</Case>
			</Switch>
		</section>
		<footer className={"relative"}>
			<TeachersFormInfosFieldsButtons
				step={step}
				submitCreation={() => createTeacher(teacherCreationForm)}
				nextStep={nextStep}
				previousStep={previousStep}
			/>
			<ErrorMessage exception={error} />
		</footer>
	</>
}

export default TeachersFormInfosFields
