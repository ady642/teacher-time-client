import React, {FunctionComponent} from "react";
import Draw1 from "@/modules/home/components/Draw1";
import useTranslation from "@/common/hooks/useTranslation";
import HomeText from "@/modules/home/components/HomeText";

interface TextDraw1Props {

}

const TextDraw1: FunctionComponent<TextDraw1Props> = () => {
	const { t } = useTranslation()

	return <section className={'relative flex justify-center sm:my-28 my-0 md:ml-16'}>
		<div className="flex md:flex-row flex-col items-center justify-between">
			<Draw1 />
			<HomeText title={t('titreDraw1')} subtitle={t('textDraw1')} urlTo={'teachers'} textTo={t('teacherList')} />
		</div>
		<div style={{bottom:'-37%', width:'11vw',height:'11vw',left:'-4.7vw'}} className ={'animate-bounce absolute rounded-full flex items-center justify-center bg-yellow-300'} />
	</section>
}

export default TextDraw1
