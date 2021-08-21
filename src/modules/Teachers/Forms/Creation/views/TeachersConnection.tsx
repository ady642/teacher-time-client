import {FunctionComponent} from "react";
import TeachersCreateForm from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateForm";
import TeachersCreateLayout from "@/modules/Teachers/Forms/Creation/layout/TeachersCreateLayout";
import TeachersCreateText from "@/modules/Teachers/Forms/Creation/components/TeachersCreateText/TeachersCreateText";

interface TeachersConnectionProps {

}

const TeachersConnection: FunctionComponent<TeachersConnectionProps> = () => {
	return <TeachersCreateLayout left={<TeachersCreateText />} right={<TeachersCreateForm />} />
}

export default TeachersConnection
