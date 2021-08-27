import {FunctionComponent} from "react";
import TeachersCreateLayout from "@/modules/Teachers/Forms/Creation/layout/TeachersCreateLayout";

interface TeachersConnectionProps {

}

const TeachersConnection: FunctionComponent<TeachersConnectionProps> = () => {
	return <TeachersCreateLayout
		left={<div>Test left</div>}
		right={<div>Test Right</div>}
	/>
}

export default TeachersConnection
