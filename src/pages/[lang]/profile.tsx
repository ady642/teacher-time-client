import React, {FC} from 'react'

import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import useRoutePush from "@/common/hooks/useRoutePush";
import BuildImage from "@/common/components/Images/BuildImage";

const Profile: FC = ({ localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { goTo } = useRoutePush()

	return (
		<LanguageProvider localization={localization}>
			<WhiteHeaderLayout locale={localization.locale} >
				<div>
					Page en construction
				</div>
				<BuildImage />
			</WhiteHeaderLayout>
		</LanguageProvider>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const localization = getLocalizationProps(ctx, "profile");

	return { props: { localization } }
}

export default Profile
