import {FunctionComponent} from "react";
import dynamic from "next/dynamic";

const ThreeComponent = dynamic(() => import('@/modules/Landing/ThreeComponent'), {
	ssr: false
})


interface threeProps {

}

const Three: FunctionComponent<threeProps> = () => {
	return <div>
		<ThreeComponent />
	</div>
}

export default Three
