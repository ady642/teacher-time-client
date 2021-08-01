import {FunctionComponent} from "react";
import SubmitButton from "@/modules/Auth/components/Buttons/SubmitButton";
import {SubmitButtonProps} from "@/modules/Auth/components/Buttons/SubmitButton";
import useTranslation from "@/common/hooks/useTranslation";

interface LoginButtonProps extends Omit<SubmitButtonProps, 'submitStatus' | 'label'> {
	loginStatus: string;
}

const LoginButton: FunctionComponent<LoginButtonProps> = ({ className, onClick, loginStatus }) => {
	const { t } = useTranslation()

	return <SubmitButton
		submitStatus={loginStatus}
		onClick={onClick}
		className={className}
		label={t('common.login')}
	/>
}

export default LoginButton
