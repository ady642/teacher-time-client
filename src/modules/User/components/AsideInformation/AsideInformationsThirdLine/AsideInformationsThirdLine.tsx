import {FunctionComponent} from "react";
import SwitchTeacherStateButton from "@/modules/Teachers/components/SwitchTeacherStateButton";

interface AsideInformationsThirdLineProps {

}

const AsideInformationsThirdLine: FunctionComponent<AsideInformationsThirdLineProps> = () => {
	return <div className={'mt-3'}>
		<SwitchTeacherStateButton />
	</div>
}

export default AsideInformationsThirdLine
