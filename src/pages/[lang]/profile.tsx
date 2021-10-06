import React, {FC} from 'react'

import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import BuildImage from "@/common/components/Images/BuildImage";
import styles from '@/modules/User/styles/profile.module.scss'

const Profile: FC = ({ localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<LanguageProvider localization={localization}>
			<WhiteHeaderLayout className={styles['container']}  locale={localization.locale} >
				<div >
					Page en construction
					<BuildImage />
				</div>
			</WhiteHeaderLayout>
		</LanguageProvider>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const localization = getLocalizationProps(ctx, "profile");

	return { props: { localization } }
}

export default Profile
