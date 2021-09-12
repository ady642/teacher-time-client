import {FunctionComponent} from "react";
import teachersFormInfosStepper from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosStepper/styles/teachersFormInfosStepper.module.scss"

interface TeachersFormInfosStepperImageProps {

}

const TeachersFormInfosStepperImage: FunctionComponent<TeachersFormInfosStepperImageProps> = () => {
	return <img className={teachersFormInfosStepper['teachers-form-infos__stepper__image']} src={'/img/stepper_image.svg'} alt={'stepper_image'} />
}

export default TeachersFormInfosStepperImage
