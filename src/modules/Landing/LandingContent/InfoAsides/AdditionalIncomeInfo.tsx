import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import InfoAside from "@/modules/Landing/LandingContent/InfoAsides/InfoAside";

interface AdditionalIncomeInfoProps {

}

const AdditionalIncomeInfo: FunctionComponent<AdditionalIncomeInfoProps> = () => {
	const { t } = useTranslation()

	return <InfoAside
		title={t('landing.additionalIncome')}
		subtitle={t('landing.additionalIncomeSubtitle')}
		icon={'stars'}
	/>
}

export default AdditionalIncomeInfo
