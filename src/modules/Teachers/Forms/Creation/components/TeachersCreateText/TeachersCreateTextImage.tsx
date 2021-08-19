import {FunctionComponent} from "react";
import Image from "next/image";

interface TeachersCreateTextImageProps {

}

const TeachersCreateTextImage: FunctionComponent = () => {
	return <Image
		src={'/img/teachers-speaking.svg'}
		alt={'TTvideo'}
		width={800}
		height={600}
		objectFit={'contain'}
	/>
}

export default TeachersCreateTextImage
