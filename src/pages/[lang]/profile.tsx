import React, {FC} from 'react'

import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import styles from '@/modules/User/styles/profile.module.scss'
import AsideInformations from "@/modules/User/components/AsideInformation/AsideInformations";
import useUserGetters from "@/context/user/helpers/useUserGetters";

const Profile: FC = ({ localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { teacher } = useUserGetters()

	return (
		<LanguageProvider localization={localization}>
			<WhiteHeaderLayout className={styles['container']}  locale={localization.locale}>
				<div className={styles['content']}>
					<AsideInformations teacher={teacher} />
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
