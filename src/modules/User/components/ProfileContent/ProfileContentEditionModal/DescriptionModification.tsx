import React, {FunctionComponent, useState} from "react";
import DescriptionIntegration
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Description/DescriptionIntegration";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import useTeacherClient from "@/modules/Teachers/services/useTeacherClient";

interface DescriptionModificationProps {

}

const DescriptionModification: FunctionComponent<DescriptionModificationProps> = () => {
	const { teacher } = useUserGetters()
	const [description, setDescription] = useState(teacher.description)

	const { modifyTeacher } = useTeacherClient()



	return <DescriptionIntegration
		description={description}
		setDescription={setDescription}
	/>
}

export default DescriptionModification
