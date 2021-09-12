import {FunctionComponent} from "react";
import SubmitButton from "@/modules/Auth/components/Buttons/SubmitButton";
import {SubmitButtonProps} from "@/modules/Auth/components/Buttons/SubmitButton";
import useTranslation from "@/common/hooks/useTranslation";

export interface RegisterButtonProps extends Omit<SubmitButtonProps, 'submitStatus' | 'label'> {
	registrationStatus: string;
}

const RegisterButton: FunctionComponent<RegisterButtonProps> = ({ className, onClick, registrationStatus }) => {
	const { t } = useTranslation()

	return <SubmitButton
		submitStatus={registrationStatus}
		onClick={onClick}
		className={className}
		label={t('commin.register')}
	/>
}

export default RegisterButton
