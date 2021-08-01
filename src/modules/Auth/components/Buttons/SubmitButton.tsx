import {FunctionComponent, useEffect, useState} from "react";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import {ButtonProps} from "@/common/types/button";
import TTLoader from "@/common/components/Loader/TTLoader";
import gsap from "gsap";
import {Check, ErrorOutline} from "@material-ui/icons";

export interface SubmitButtonProps extends Omit<ButtonProps, 'children'> {
	submitStatus: string;
	label: string;
}

const SubmitButton: FunctionComponent<SubmitButtonProps> = ({
	className,
	onClick,
	submitStatus,
	label
}) => {
	const [lastTop, setLastTop] = useState(-65)

	useEffect(() => {
		let top = lastTop
		gsap.from(`#submit-button__content`, { top });

		switch (submitStatus) {
		case 'PENDING':
			top = -32
			break
		case 'ERROR':
			top = 1
			break
		case 'OK':
			top = 1
			break
		default:
			top = -65
			break
		}

		setLastTop(top)
		gsap.to(`#submit-button__content`, { top, ease: 'ease-in' });

	}, [submitStatus])


	return <TailwindButton type={'button'} onClick={onClick} className={`w-40 flex overflow-hidden justify-center py-1 h-8 text-lg relative mt-3 ${className}`}>
		<div id={'submit-button__content'} className={`flex flex-col items-center absolute`}>
			<span>{ submitStatus === 'OK' ? <Check fontSize={'medium'} /> : <ErrorOutline fontSize={'medium'}  /> }</span>
			<span><TTLoader /></span>
			<span>{ label }</span>
		</div>
	</TailwindButton>
}

export default SubmitButton
