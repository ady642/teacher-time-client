import {FunctionComponent} from "react";
import LandingHeader from "@/common/components/Headers/LandingHeader/LandingHeader";
import BackgroundEllipse from "@/common/components/Background/BackgroundEllipse";

interface LandingLayoutProps {

}

const LandingLayout: FunctionComponent<LandingLayoutProps> = ({ children }) => {
	return <div className={'relative overflow-hidden'}>
		<BackgroundEllipse />
		<LandingHeader />
		{ children }
	</div>
}

export default LandingLayout
