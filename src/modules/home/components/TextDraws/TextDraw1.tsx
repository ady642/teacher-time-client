import React, {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import TextDraw from "@/modules/home/components/TextDraw";

const TextDraw1: FunctionComponent = () => {
	const { t } = useTranslation()

	return <TextDraw
		srcDraw={'/img/home/workingstudent.png'}
		title={t('home.titreDraw1')}
		subtitle={t('home.textDraw1')}
		urlTo={'teachers/list'}
		textTo={t('home.teacherList')}
	/>
}

export default TextDraw1
