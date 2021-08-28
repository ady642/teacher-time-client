import {FunctionComponent} from "react";
import TeacherFormInfosStepperItem, {TeacherFormInfosStepperItemProps} from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosStepper/TeachersFormInfosStepperItem/TeacherFormInfosStepperItem";
import {
	Step,
	StepperProps
} from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosStepper/types";


interface TeacherFormInfosStepperProps extends StepperProps {

}

const TeacherFormInfosStepper: FunctionComponent<TeacherFormInfosStepperProps> = ({ setStep, step }) => {
	const stepperItems: TeacherFormInfosStepperItemProps[] = [
		{
			active: step === Step.FIELD,
			title: "étape 1. Votre spécialité",
			subtitle: 'Choisissez la matière que vous souhaitez enseigner. Vous pouvez en choisir plusieurs',
			onClick: () => setStep(Step.FIELD)
		},  {
			active: step === Step.DESCRIPTION,
			title: "étape 2. Titre de votre annonce",
			subtitle: "La description permet de vous présenter rapidement aux élèves lorsqu'ils cherchent un professeur",
			onClick: () => setStep(Step.DESCRIPTION)
		}
	]

	return <>
		{ stepperItems.map((stepperItem) =>
			<TeacherFormInfosStepperItem
				key={stepperItem.title}
				active={stepperItem.active}
				title={stepperItem.title}
				subtitle={stepperItem.subtitle}
				onClick={stepperItem.onClick}
			/>
		)
		}
	</>
}

export default TeacherFormInfosStepper
