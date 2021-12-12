import React, {FunctionComponent, useEffect} from "react";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import { Switch, Case } from "react-switch-case-module"
import TeachersConnection from "@/modules/Teachers/Forms/Creation/views/TeachersConnection";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import TeachersFormInfos from "@/modules/Teachers/Forms/Creation/views/TeachersFormInfos";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import useRoutePush from "@/common/hooks/useRoutePush";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";

interface CreateTeacherProps {

}

const CreateTeacher: FunctionComponent<CreateTeacherProps> = ({ toLogin }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { token} = useAuthGetters()
	const { teacher } = useUserGetters()
	const { goTo } =  useRoutePush()

	useEffect(() => {
		const goAsync = async () => {
			await goTo('home')
		}

		if(teacher)
			(async() => await goAsync())()
	}, [teacher])

	return <WhiteHeaderLayout>
		<Switch componentName={token ? 'TeachersFormInfos': 'TeachersConnection'} defaultComponent={<TeachersConnection toLogin={false} />}>
			<Case value={'TeachersConnection'}><TeachersConnection toLogin={toLogin} /></Case>
			<Case value={'TeachersFormInfos'}><TeachersFormInfos /></Case>
		</Switch>
	</WhiteHeaderLayout>
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const toLogin = ctx.query?.toLogin ?? ''

	return {
		props: { toLogin }
	}
}

export default CreateTeacher
