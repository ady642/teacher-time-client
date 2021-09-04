import {FunctionComponent} from "react";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import buttonsStyle from '@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/TeachersFormInfosFieldsButtons/styles/buttonsStyle.module.scss'

interface NextButtonProps {
    onClick: () => void
}

const NextButton: FunctionComponent<NextButtonProps> = ({ onClick }) => {
	return <TailwindButton
		className={`${buttonsStyle['stepper-button__next']} ${buttonsStyle['stepper-button']}`}
		onClick={onClick}>
        Suivant
	</TailwindButton>
}

export default NextButton
