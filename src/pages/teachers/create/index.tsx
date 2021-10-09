import React, {FunctionComponent, useEffect} from "react";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import { Switch, Case } from "react-switch-case-module"
import TeachersConnection from "@/modules/Teachers/Forms/Creation/views/TeachersConnection";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import TeachersFormInfos from "@/modules/Teachers/Forms/Creation/views/TeachersFormInfos";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import useRoutePush from "@/common/hooks/useRoutePush";

interface CreateTeacherProps {

}

const CreateTeacher: FunctionComponent<CreateTeacherProps> = () => {
	const { token} = useAuthGetters()
	const { teacher } = useUserGetters()
	const { goTo } =  useRoutePush()

	useEffect(() => {
		const goAsync = async () => {
			await goTo('')
		}

		if(teacher)
			(async() => await goAsync())()
	}, [teacher])

	return <WhiteHeaderLayout>
		<Switch componentName={token ? 'TeachersFormInfos': 'TeachersConnection'} defaultComponent={<TeachersConnection />}>
			<Case value={'TeachersConnection'}><TeachersConnection /></Case>
			<Case value={'TeachersFormInfos'}><TeachersFormInfos /></Case>
		</Switch>
	</WhiteHeaderLayout>
}

export default CreateTeacher
