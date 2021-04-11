import {FunctionComponent} from "react";
import Image from 'next/image'

const Logo: FunctionComponent = () => {
    return <Image
        src={'/img/logo.jpeg'}
        alt="Picture of the author"
        width={100}
        height={40}
    />
}

export default Logo
