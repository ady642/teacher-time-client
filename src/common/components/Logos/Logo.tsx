import {FC} from "react";
import Image from 'next/image'

interface LogoProps {
    width: string|number;
    height: string|number;
}

const Logo: FC<LogoProps> = ({ width = 'auto', height = 'auto' }) => {
	return <Image
		src={'/img/logo/logo_crop.png'}
		alt="Logo"
		width={width}
		height={height}
	/>
}

export default Logo
