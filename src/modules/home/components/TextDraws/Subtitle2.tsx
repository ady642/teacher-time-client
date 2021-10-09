import React, {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";

interface Subtitle2Props {

}

const Subtitle2: FunctionComponent<Subtitle2Props> = () => {
	const { t } = useTranslation()

	return <div className={'flex flex-col'}>
		<span>
			{ t('home.textDraw2a') }
		</span>
		<span className={'lg:my-2 my-1'}>
            ✅ { t('home.textDraw2b') }
		</span>
		<span>
			💯 { t('home.textDraw2c') }
		</span>
	</div>
}

export default Subtitle2
