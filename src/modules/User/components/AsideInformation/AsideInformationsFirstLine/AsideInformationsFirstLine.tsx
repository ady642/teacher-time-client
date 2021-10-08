import {FunctionComponent} from "react";
import AsideInformationsName
	from "@/modules/User/components/AsideInformation/AsideInformationsFirstLine/AsideInformationsName";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";
import AsideInformationsCertificate
	from "@/modules/User/components/AsideInformation/AsideInformationsFirstLine/AsideInformationsCertificate";
import styles from "@/modules/User/styles/profile.module.scss";

interface AsideInformationsFirstLineProps {
    teacher: Teacher
}

const AsideInformationsFirstLine: FunctionComponent<AsideInformationsFirstLineProps> = ({ teacher }) => {
	return <div className={styles['aside-information__first-line']}>
		<AsideInformationsName firstName={teacher.user.firstName} lastName={teacher.user.lastName} />
		<AsideInformationsCertificate />
	</div>
}

export default AsideInformationsFirstLine
