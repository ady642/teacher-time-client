import {FunctionComponent, useEffect, useState} from "react";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import {ButtonProps} from "@/common/types/button";
import TTLoader from "@/common/components/Loader/TTLoader";
import gsap from "gsap";
import {Check, ErrorOutline} from "@material-ui/icons";
import {makeId} from "@/common/utils/string";

export interface SubmitButtonProps extends Omit<ButtonProps, 'children'> {
	submitStatus: string;
	label: string;
	submitMapping?: Record<string, number>;
}

const SubmitButton: FunctionComponent<SubmitButtonProps> = ({
	className,
	onClick,
	submitStatus,
	submitMapping= {
		'OK': 0,
		'ERROR': -27,
		'LOADING': -60,
		'PENDING': -94
	},
	label
}) => {
	const [lastTop, setLastTop] = useState(-94)

	const [buttonId, setButtonId] = useState('test')  // generate random string

	useEffect(() => {
		setButtonId(makeId(10))
	}, [])

	useEffect(() => {
		let top = lastTop
		gsap.from(`#${buttonId}`, { top });

		top = submitMapping[submitStatus] ?? submitMapping['PENDING']

		setLastTop(top)
		gsap.to(`#${buttonId}`, { top, ease: 'ease-in' });

	}, [submitStatus])

	return <TailwindButton type={'button'} onClick={onClick} className={`w-40 flex overflow-hidden justify-center py-1 h-8 text-lg relative mt-3 ${className}`}>
		<div id={buttonId} className={`flex flex-col items-center absolute`}>
			<span className={`${submitStatus === 'OK' ? 'visible': 'invisible'}`}><Check fontSize={'medium'} /></span>
			<span className={`${submitStatus === 'ERROR' ? 'visible': 'invisible'}`}><ErrorOutline fontSize={'medium'}  /></span>
			<span className={`${submitStatus === 'LOADING' ? 'visible': 'invisible'}`}><TTLoader /></span>
			<span>{ label }</span>
		</div>
	</TailwindButton>
}

export default SubmitButton
