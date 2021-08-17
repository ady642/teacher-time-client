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
	/>
}

export default TextDraw1