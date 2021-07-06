import React, {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import TextDraw from "@/modules/home/components/TextDraw";

const TextDraw1: FunctionComponent = () => {
	const { t } = useTranslation()

	return <TextDraw
		srcDraw={'/img/virtualexplanation.png'}
		title={t('titreDraw3')}
		subtitle={t('textDraw3')}
		urlTo={'teachers'}
		textTo={t('common.findAteacher')}
		classBounce={'bg-red-400'}
		bottomBounce={'-35%'}
		leftBounce={'-10%'}
	/>
}

export default TextDraw1
