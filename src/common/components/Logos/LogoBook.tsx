import {FC} from "react";
import Image from 'next/image'

interface LogoBookProps {
    width?: number
    height?: number
}

const LogoBook: FC<LogoBookProps> = ({ width = 100, height = 40 }) => {
    return <Image
        src={'/img/logo/logo_book.png'}
        alt="LogoBook"
        width={width}
        height={height}
    />
}

export default LogoBook
