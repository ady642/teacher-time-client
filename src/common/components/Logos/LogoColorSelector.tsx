import {FC} from "react";
import Image from 'next/image'

interface LogoColorSelectorProps {
    width?: number;
    height?: number
}

const LogoColorSelector: FC<LogoColorSelectorProps> = ({ width = 30, height = 30 }) => {
	return <Image
		src={'/img/logo/logo_color_selector.svg'}
		alt="LogoColorSelector"
		width={width}
		height={height}
	/>
}

export default LogoColorSelector