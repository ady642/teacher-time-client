import {FunctionComponent} from "react";
import AsideInformationsFirstLine
	from "@/modules/User/components/AsideInformation/AsideInformationsFirstLine/AsideInformationsFirstLine";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";
import AsideInformationsSecondLine
	from "@/modules/User/components/AsideInformation/AsideInformationsSecondLine/AsideInformationsSecondLine";

interface AsideInformationsProps {
	teacher: Teacher
}

const AsideInformations: FunctionComponent<AsideInformationsProps> = ({ teacher }) => {
	return <div>
		<AsideInformationsFirstLine teacher={teacher}/>
		<AsideInformationsSecondLine />
	</div>
}

export default AsideInformations
