import {FunctionComponent} from "react";
import TeacherFormInfosStepperItem, {TeacherFormInfosStepperItemProps} from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosStepper/TeachersFormInfosStepperItem/TeacherFormInfosStepperItem";
import {
	Step,
	StepperProps
} from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosStepper/types";
import TeachersFormInfosStepperImage
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosStepper/TeachersFormInfosStepperImage";


interface TeacherFormInfosStepperProps extends StepperProps {

}

const TeacherFormInfosStepper: FunctionComponent<TeacherFormInfosStepperProps> = ({ setStep, step }) => {
	const stepperItems: TeacherFormInfosStepperItemProps[] = [
		{
			active: step === Step.FIELD,
			title: "étape 1. Votre spécialité",
			subtitle: 'Choisissez la matière que vous souhaitez enseigner. Vous pouvez en choisir plusieurs',
			onClick: () => setStep(Step.FIELD)
		}, {
			active: step === Step.DESCRIPTION,
			title: "étape 2. Titre de votre annonce",
			subtitle: "La description permet de vous présenter rapidement aux élèves lorsque les élèves cherchent un professeur",
			onClick: () => setStep(Step.DESCRIPTION)
		}, {
			active: step === Step.LEVEL,
			title: "étape 3. Le niveau enseigné",
			subtitle: 'Choisissez les classes auxquelles vous souhaitez enseigner.',
			onClick: () => setStep(Step.LEVEL)
		}, {
			active: step === Step.HOURLY_RATE,
			title: "étape 4. Prix par heure",
			subtitle: "Indiquez le prix par heure que vous souhaitez faire facturer aux élèves. Si une session dure moins de 1H elle sera facturé au prorata.",
			onClick: () => setStep(Step.HOURLY_RATE)
		}
	]

	return <>
		<TeachersFormInfosStepperImage />
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
