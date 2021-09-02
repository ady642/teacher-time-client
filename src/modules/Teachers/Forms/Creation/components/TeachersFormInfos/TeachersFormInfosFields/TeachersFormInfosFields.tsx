import {FunctionComponent, useState} from "react";
import { Switch, Case} from "react-switch-case-module"
import FieldSelection
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/FieldSelection/FieldSelection";
import {StepperProps} from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosStepper/types";
import FieldTitle
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/FieldTitle";
import FieldSubtitle
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/FieldSubtitle";
import TeachersFormInfosFieldsButton
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/TeachersFormInfosFieldsButton";

interface TeachersFormInfosFieldsProps extends StepperProps {

}

const TeachersFormInfosFields: FunctionComponent<TeachersFormInfosFieldsProps> = ({ setStep, step }) => {
	const [title, setTitle] = useState('Sélectionner votre spécialité')
	const [subtitle, setSubtitle] = useState('Vous pouvez sélectionner plusieurs matières')

	const nextStep = () => {
		setStep(step + 1)
	}

	const previousStep = () => {
		setStep(step - 1)
	}

	return <>
		<header>
			<FieldTitle title={title} />
			<FieldSubtitle subtitle={subtitle} />
		</header>
		<section>
			<Switch defaultComponent={<FieldSelection />} componentName={'Field'}>
				<Case value={'Field'}><FieldSelection /></Case>
				<Case value={'description'}><textarea name="description"/></Case>
			</Switch>
		</section>
		<footer>
			<TeachersFormInfosFieldsButton nextStep={nextStep} previousStep={previousStep}/>
		</footer>
	</>
}

export default TeachersFormInfosFields
