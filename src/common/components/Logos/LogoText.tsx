import {FC} from "react";
import Image from 'next/image'

interface LogoProps {
    width?: number;
    height?: number
}

const Logo: FC<LogoProps> = ({ width = '140', height = '30' }) => {
	return <Image
		src={'/img/logo/newLogo.svg'}
		alt="Logo"
		width={width}
		height={height}
	/>
}

export default Logo
