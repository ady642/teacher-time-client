import {FunctionComponent} from "react";
import HiwItem from "@/modules/Landing/Teacher/HowItWorks/Items/HiwItem";
import useTranslation from "@/common/hooks/useTranslation";

interface RegisterItemProps {

}

const RegisterItem: FunctionComponent<RegisterItemProps> = () => {
	const { t } = useTranslation()

	return <HiwItem
		index={1}
		imageSrc={'/img/hiw/registration.svg'}
		text={t('landing.hiw.registration')}
	/>
}

export default RegisterItem
