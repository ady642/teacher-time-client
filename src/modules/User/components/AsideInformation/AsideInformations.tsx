import {FunctionComponent} from "react";
import AsideInformationsFirstLine
	from "@/modules/User/components/AsideInformation/AsideInformationsFirstLine/AsideInformationsFirstLine";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";

interface AsideInformationsProps {
	teacher: Teacher
}

const AsideInformations: FunctionComponent<AsideInformationsProps> = ({ teacher }) => {
	return <div>
		<AsideInformationsFirstLine teacher={teacher}/>
	</div>
}

export default AsideInformations
