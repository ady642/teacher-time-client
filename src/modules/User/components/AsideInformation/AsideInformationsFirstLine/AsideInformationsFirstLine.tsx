import {FunctionComponent} from "react";
import AsideInformationsName
	from "@/modules/User/components/AsideInformation/AsideInformationsFirstLine/AsideInformationsName";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";

interface AsideInformationsFirstLineProps {
    teacher: Teacher
}

const AsideInformationsFirstLine: FunctionComponent<AsideInformationsFirstLineProps> = ({ teacher }) => {
	return <div className={'flex items-center'}>
		<AsideInformationsName firstName={teacher.user.firstName} lastName={teacher.user.lastName} />
	</div>
}

export default AsideInformationsFirstLine
