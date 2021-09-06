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

interface TeachersFormInfosFieldsProps extends StepperProps {

}

const TeachersFormInfosFields: FunctionComponent<TeachersFormInfosFieldsProps> = ({ setStep, step }) => {
	const [title, setTitle] = useState('form.creation.fields.title')
	const [subtitle, setSubtitle] = useState('form.creation.fields.subtitle')
	const [componentName, setComponentName] = useState('Field')
	const { t } = useTranslation()
	const [teacherCreationForm, setTeacherCreationForm] = useState(new TeacherCreationForm())

	interface stepMappingComponentInterface {
		componentName: string;
		title: string;
		subtitle: string;
	}

	const stepMappingComponent: Record<number, stepMappingComponentInterface> = {
		[Step.FIELD]: {
			componentName: 'Field', title: 'form.creation.fields.title', subtitle: 'form.creation.fields.subtitle'
		},
		[Step.DESCRIPTION]: {
			componentName: 'Description', title: 'form.creation.description.title', subtitle: 'form.creation.description.subtitle'
		},
		[Step.LEVEL]: {
			componentName: 'Level', title: 'form.creation.level.title', subtitle: 'form.creation.level.subtitle'
		},
		[Step.HOURLY_RATE]: {
			componentName: 'HourlyRate', title: 'form.creation.hourlyRate.title', subtitle: 'form.creation.hourlyRate.subtitle'
		},
		[Step.DIPLOMA]: {
			componentName: 'Field', title: 'form.creation.fields.title', subtitle: 'form.creation.fields.subtitle'
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

	return <>
		<header>
			<FieldTitle title={t(title)} />
			<FieldSubtitle subtitle={t(subtitle)} />
		</header>
		<section className={fieldSelectionStyles['field-selection__content']}>
			<Switch defaultComponent={<FieldSelection />} componentName={componentName}>
				<Case value={'Field'}><FieldSelection /></Case>
				<Case value={'Description'}>
					<Description
						setTeacherCreationForm={setTeacherCreationForm}
						teacherCreationForm={teacherCreationForm}
					/>
				</Case>
				<Case value={'Level'}><LevelSelection /></Case>
				<Case value={'HourlyRate'}>
					<HourlyRateInput
						setTeacherCreationForm={setTeacherCreationForm}
						teacherCreationForm={teacherCreationForm}
					/>
				</Case>
			</Switch>
		</section>
		<footer>
			<TeachersFormInfosFieldsButtons nextStep={nextStep} previousStep={previousStep}/>
		</footer>
	</>
}

export default TeachersFormInfosFields
