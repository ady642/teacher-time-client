import {FunctionComponent} from "react";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import buttonsStyle from '@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Common/TeachersFormInfosFieldsButtons/styles/buttonsStyle.module.scss'
import classNames from "classnames";

interface NextButtonProps {
    onClick: () => void;
	label?: string;
	className?: string
}

const NextButton: FunctionComponent<NextButtonProps> = ({ className, onClick, label= 'Finir' }) => {
	const classes = classNames(className, buttonsStyle['stepper-button__next'], buttonsStyle['stepper-button'])

	return <TailwindButton
		className={classes}
		onClick={onClick}>
		{ label }
	</TailwindButton>
}

export default NextButton
