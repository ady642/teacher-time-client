import React from "react";
import Head from "next/head";
import { getInitialLocale } from "@/translations/getInitialLocale";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";

const Index: React.FC = ({ token }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	React.useEffect(() => {
		const tokenQuery = token ? `?token=${token}`: ''

		window.location.replace(`/${getInitialLocale()}${tokenQuery}`);
	});

	return (
		<Head>
			<meta name="robots" content="noindex, nofollow" />
			<title>Teacher Time</title>
		</Head>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const token = ctx.query?.token ?? ''

	try {
		return {
			props: { token }
		}
	} catch (e) {
		throw new Error(e)
	}
}

export default Index;
