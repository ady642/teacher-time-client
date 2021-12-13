import React, {FunctionComponent} from "react";
import DashboardLayout from "@/common/layouts/DashboardLayout";
import NavBar from "@/modules/Teachers/Dashboard/NavBar/NavBar";
import styles from "@/modules/User/styles/profile.module.scss";
import AsideInformations from "@/modules/User/components/AsideInformation/AsideInformations";
import ProfileContent from "@/modules/User/components/ProfileContent/ProfileContent";
import useUserGetters from "@/context/user/helpers/useUserGetters";

interface DashboardProps {

}

const Index: FunctionComponent<DashboardProps> = () => {
	const { teacher } = useUserGetters()

	return <DashboardLayout
		navBar={<NavBar />}
		content={<div className={styles['content']}>
			<AsideInformations teacher={teacher} />
			<ProfileContent teacher={teacher} />
		</div>}
	/>
}

export default Index
