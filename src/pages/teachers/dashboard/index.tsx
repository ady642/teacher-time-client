import {FunctionComponent} from "react";
import DashboardLayout from "@/common/layouts/DashboardLayout";
import NavBar from "@/modules/Teachers/Dashboard/NavBar/NavBar";
import Home from "@/modules/Teachers/Dashboard/Content/Views/Home";

interface DashboardProps {

}

const Index: FunctionComponent<DashboardProps> = () => {
	return <DashboardLayout
		navBar={<NavBar />}
		content={<Home />}
	/>
}

export default Index
