import {FunctionComponent} from "react";
import dynamic from "next/dynamic";

const ThreeComponent = dynamic(() => import('@/modules/Landing/ChooseBetweenTeacherAndStudent/ThreeComponent'), {
	ssr: false
})


interface threeProps {

}

const Three: FunctionComponent<threeProps> = () => {
	return <ThreeComponent />
}

export default Three
