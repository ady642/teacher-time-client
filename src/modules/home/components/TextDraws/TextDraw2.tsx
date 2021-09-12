import React, {FunctionComponent, useEffect, useState} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import TextDraw from "@/modules/home/components/TextDraw";
import Subtitle2 from "@/modules/home/components/TextDraws/Subtitle2";
import AvailableSwitch from "@/modules/Teachers/List/components/AvailableSwitch";

interface TextDraw2Props {
	token?: string;
	openRegisterModal: () => void
}

const TextDraw2: FunctionComponent<TextDraw2Props> = ({ openRegisterModal }) => {
	const { t } = useTranslation()


	return <TextDraw
		srcDraw={'/img/workingwomandraw.png'}
		title={t('titreDraw2')}
		subtitle={<Subtitle2 />}
		textTo={<AvailableSwitch />}
		reverse
		callback={openRegisterModal}
	/>
}

export default TextDraw2
