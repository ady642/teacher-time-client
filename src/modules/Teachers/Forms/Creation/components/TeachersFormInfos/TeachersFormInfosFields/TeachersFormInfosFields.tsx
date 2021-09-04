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

interface TeachersFormInfosFieldsProps extends StepperProps {

}

const TeachersFormInfosFields: FunctionComponent<TeachersFormInfosFieldsProps> = ({ setStep, step }) => {
	const [title, setTitle] = useState('form.creation.fields.title')
	const [subtitle, setSubtitle] = useState('form.creation.fields.subtitle')
	const [componentName, setComponentName] = useState('Field')
	const { t } = useTranslation()

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
			componentName: 'Field', title: 'form.creation.fields.title', subtitle: 'form.creation.fields.subtitle'
		},
		[Step.DIPLOMA]: {
			componentName: 'Field', title: 'form.creation.fields.title', subtitle: 'form.creation.fields.subtitle'
		},
		[Step.HOURLY_RATE]: {
			componentName: 'Field', title: 'form.creation.fields.title', subtitle: 'form.creation.fields.subtitle'
		}
	}

	const nextStep = () => {
		setStep(step + 1)
	}

	const previousStep = () => {
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
				<Case value={'Description'}><textarea name="description"/></Case>
			</Switch>
		</section>
		<footer>
			<TeachersFormInfosFieldsButtons nextStep={nextStep} previousStep={previousStep}/>
		</footer>
	</>
}

export default TeachersFormInfosFields
