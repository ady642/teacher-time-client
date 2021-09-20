import React, {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import TextDraw from "@/modules/home/components/TextDraw";
import Subtitle2 from "@/modules/home/components/TextDraws/Subtitle2";
import AvailableSwitch from "@/modules/Teachers/List/components/AvailableSwitch";
import useUserGetters from "@/context/user/helpers/useUserGetters";

interface TextDraw2Props {
	token?: string;
	openRegisterModal: () => void;
}

const TextDraw2: FunctionComponent<TextDraw2Props> = ({ openRegisterModal }) => {
	const { t } = useTranslation()
	const { teacher } = useUserGetters()

	return <TextDraw
		srcDraw={'/img/workingwomandraw.png'}
		title={t('titreDraw2')}
		subtitle={<Subtitle2 />}
		urlTo={teacher ? null : 'teachers/create'}
		textTo={teacher ?
			<AvailableSwitch /> :
			'Donner des cours'}
		reverse
		callback={openRegisterModal}
	/>
}

export default TextDraw2
