import {FC} from "react";
import Image from 'next/image'

interface LogoTextBoxProps {
    width?: number;
    height?: number
}

const LogoTextBox: FC<LogoTextBoxProps> = ({ width = 30, height = 30 }) => {
	return <Image
		src={'/img/Logo_textbox.svg'}
		alt="LogoTextBox"
		width={width}
		height={height}
	/>
}

export default LogoTextBox