import {FunctionComponent, useEffect, useState} from "react";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import useTranslation from "@/common/hooks/useTranslation";
import {ButtonProps} from "@/common/types/button";
import TTLoader from "@/common/components/Loader/TTLoader";
import gsap from "gsap";
import {Check, ErrorOutline} from "@material-ui/icons";

interface RegisterButtonProps extends Omit<ButtonProps, 'children'> {
	registrationStatus: string;
}

const RegisterButton: FunctionComponent<RegisterButtonProps> = ({ className, onClick, registrationStatus }) => {
	const { t } = useTranslation()
	const [lastTop, setLastTop] = useState(-65)

	useEffect(() => {
		let top = lastTop
		gsap.from(`#register-button__content`, { top });

		switch (registrationStatus) {
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
		gsap.to(`#register-button__content`, { top, ease: 'ease-in' });

	}, [registrationStatus])


	return <TailwindButton type={'button'} onClick={onClick} className={`w-40 flex overflow-hidden justify-center py-1 h-8 text-lg relative mt-3 ${className}`}>
		<div id={'register-button__content'} className={`flex flex-col items-center absolute`}>
			<span>{ registrationStatus === 'OK' ? <Check fontSize={'medium'} /> : <ErrorOutline fontSize={'medium'}  /> }</span>
			<span><TTLoader /></span>
			<span>{ t('common.register') }</span>
		</div>
	</TailwindButton>
}

export default RegisterButton
