import {FunctionComponent} from "react";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import TeachersConnection from "@/modules/Teachers/Forms/Creation/views/TeachersConnection";

interface createProps {

}

const CreateTeacher: FunctionComponent<createProps> = ({ localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

	return <LanguageProvider localization={localization} >
		<WhiteHeaderLayout locale={localization.locale}>
			<TeachersConnection />
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
