import React, {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import TextDraw from "@/modules/home/components/TextDraw";

const TextDraw1: FunctionComponent = () => {
	const { t } = useTranslation()

	return <TextDraw
		srcDraw={'/img/home/workingstudent.png'}
		title={t('titreDraw1')}
		subtitle={t('textDraw1')}
		urlTo={'teachers'}
		textTo={t('teacherList')}
		classBounce={'bg-yellow-300'}
		bottomBounce={'-85%'}
		leftBounce={'-300px'}
	/>
}

export default TextDraw1
