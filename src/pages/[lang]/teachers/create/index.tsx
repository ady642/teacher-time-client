import React, {FunctionComponent, useEffect} from "react";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import { Switch, Case } from "react-switch-case-module"
import TeachersConnection from "@/modules/Teachers/Forms/Creation/views/TeachersConnection";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import TeachersFormInfos from "@/modules/Teachers/Forms/Creation/views/TeachersFormInfos";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import useRoutePush from "@/common/hooks/useRoutePush";

interface CreateTeacherProps {

}

const CreateTeacher: FunctionComponent<CreateTeacherProps> = ({ localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { token } = useAuthGetters()
	const { teacher } = useUserGetters()
	const { goTo } =  useRoutePush()


	useEffect(() => {
		if(teacher) {
			goTo(localization.locale, '/')
		}
	})

	return <LanguageProvider localization={localization}>
		<WhiteHeaderLayout locale={localization.locale}>
			<Switch componentName={token ? 'TeachersFormInfos': 'TeachersConnection'} defaultComponent={<TeachersConnection />}>
				<Case value={'TeachersConnection'}><TeachersConnection /></Case>
				<Case value={'TeachersFormInfos'}><TeachersFormInfos /></Case>
			</Switch>
		</WhiteHeaderLayout>
	</LanguageProvider>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const localization = getLocalizationProps(ctx, "teachers");

	try {
		return {
			props: { localization }
		}
	} catch (e) {
		throw new Error(e)
	}
}

export default CreateTeacher
