import React, {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import TextDraw from "@/modules/home/components/TextDraw";
import Subtitle2 from "@/modules/home/components/TextDraws/Subtitle2";

const TextDraw1: FunctionComponent = () => {
	const { t } = useTranslation()

	return <TextDraw
		srcDraw={'/img/workingwomandraw.png'}
		title={t('titreDraw2')}
		subtitle={<Subtitle2 />}
		urlTo={'room/create'}
		textTo={t('common.createRoom')}
		classBounce={'bg-blueviolet'}
		bottomBounce={'-50%'}
		leftBounce={'105%'}
		reverse
	/>
}

export default TextDraw1
