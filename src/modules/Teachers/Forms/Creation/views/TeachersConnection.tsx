import {FunctionComponent} from "react";
import TeachersCreateLayout from "@/modules/Teachers/Forms/Creation/layout/TeachersCreateLayout";
import TeachersCreateText from "@/modules/Teachers/Forms/Creation/components/TeachersCreateText";
import TeachersCreateForm from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm";


interface TeachersConnectionProps {

}

const TeachersConnection: FunctionComponent<TeachersConnectionProps> = () => {
	return <TeachersCreateLayout left={<TeachersCreateText />} right={<TeachersCreateForm />} />
}

export default TeachersConnection
