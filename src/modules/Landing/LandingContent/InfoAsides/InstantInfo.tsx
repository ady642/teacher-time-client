import {FunctionComponent} from "react";
import InfoAside from "@/modules/Landing/LandingContent/InfoAsides/InfoAside";
import useTranslation from "@/common/hooks/useTranslation";

interface InstantInfoProps {

}

const InstantInfo: FunctionComponent<InstantInfoProps> = () => {
	const { t } = useTranslation()

	return <InfoAside
		title={t('landing.instant')}
		subtitle={t('landing.instantSubtitle')}
		icon={'board'}
	/>
}

export default InstantInfo
