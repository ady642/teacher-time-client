import {FunctionComponent, useEffect, useState} from "react";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import {ButtonProps} from "@/common/types/button";
import TTLoader from "@/common/components/Loader/TTLoader";
import gsap from "gsap";
import {Check, ErrorOutline} from "@material-ui/icons";

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
		'PENDING': -32,
		'ERROR': -21,
		'OK': -65
	},
	label
}) => {
	const [lastTop, setLastTop] = useState(-65)

	function makeId(length: number) {
		let result           = '';
		const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		const charactersLength = characters.length;
		for ( let i = 0; i < length; i++ ) {
			result += characters.charAt(Math.floor(Math.random() *
				charactersLength));
		}
		return result;
	}

	const [buttonId, setButtonId] = useState('test')  // generate random string

	useEffect(() => {
		setButtonId(makeId(10))
	}, [])

	useEffect(() => {
		let top = lastTop
		gsap.from(`#${buttonId}`, { top });

		top = submitMapping[submitStatus] ?? submitMapping['OK']

		setLastTop(top)
		gsap.to(`#${buttonId}`, { top, ease: 'ease-in' });

	}, [submitStatus])


	return <TailwindButton type={'button'} onClick={onClick} className={`w-40 flex overflow-hidden justify-center py-1 h-8 text-lg relative mt-3 ${className}`}>
		<div id={buttonId} className={`flex flex-col items-center absolute`}>
			<span>{ submitStatus === 'OK' ? <Check fontSize={'medium'} /> : <ErrorOutline fontSize={'medium'}  /> }</span>
			<span><TTLoader /></span>
			<span>{ label }</span>
		</div>
	</TailwindButton>
}

export default SubmitButton
