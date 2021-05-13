import {FunctionComponent} from "react";
import SimpleButton from "@/common/components/Buttons/SimpleButton";
import useTranslation from "@/common/hooks/useTranslation";

interface SignInModalActivatorProps {
    onClick: () => void
}

const SignInModalActivator: FunctionComponent<SignInModalActivatorProps> = ({ onClick }) => {
	const { t } = useTranslation()

	return <SimpleButton text={t('common.login')} onClick={onClick} />
}

export default SignInModalActivator
