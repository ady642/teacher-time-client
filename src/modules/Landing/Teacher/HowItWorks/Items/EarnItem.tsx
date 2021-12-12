import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import HiwItem from "@/modules/Landing/Teacher/HowItWorks/Items/HiwItem";

interface EarnItemProps {

}

const EarnItem: FunctionComponent<EarnItemProps> = () => {
	const { t } = useTranslation()

	return <HiwItem
		index={3}
		imageSrc={'/img/hiw/earn.svg'}
		text={t('landing.hiw.earn')}
	/>
}

export default EarnItem
