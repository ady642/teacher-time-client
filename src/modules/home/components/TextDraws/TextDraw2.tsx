import React, {FunctionComponent, useEffect, useState} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import TextDraw from "@/modules/home/components/TextDraw";
import Subtitle2 from "@/modules/home/components/TextDraws/Subtitle2";

interface TextDraw2Props {
	token?: string;
	openRegisterModal: () => void
}

const TextDraw2: FunctionComponent<TextDraw2Props> = ({ token = '', openRegisterModal }) => {
	const { t } = useTranslation()
	const [urlTo, setUrlTo] = useState('')


	useEffect(() => {
		token ? setUrlTo('room/create') : setUrlTo('')
	}, [token])


	return <TextDraw
		srcDraw={'/img/workingwomandraw.png'}
		title={t('titreDraw2')}
		subtitle={<Subtitle2 />}
		urlTo={urlTo}
		textTo={t('common.createRoom')}
		reverse
		callback={openRegisterModal}
	/>
}

export default TextDraw2
