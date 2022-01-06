import {FunctionComponent} from "react";
import DashboardLayout from "@/common/layouts/DashboardLayout";
import NavBar from "@/modules/Teachers/Dashboard/NavBar/NavBar";
import Home from "@/modules/Teachers/Dashboard/Content/Home/Views/Home";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import useRoomManagement from "@/modules/Room/hooks/useRoomManagement";

interface DashboardProps {

}

const Index: FunctionComponent<DashboardProps> = () => {
	const { teacher } = useUserGetters()

	useRoomManagement()

	return <DashboardLayout
		navBar={<NavBar />}
		content={<Home
			teacher={teacher}
		/>}
	/>
}

export default Index
