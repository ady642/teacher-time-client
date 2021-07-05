import React, {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";

interface Subtitle2Props {

}

const Subtitle2: FunctionComponent<Subtitle2Props> = () => {
	const { t } = useTranslation()

	return <div className={'flex flex-col'}>
		<span className={'flex items-center'}>
			<span>
				{ t('textDraw2a') }
			</span>
		</span>
		<span>
            ✅ { t('textDraw2b') }
		</span>
		<span>
			💯 { t('textDraw2c') }
		</span>
	</div>
}

export default Subtitle2
