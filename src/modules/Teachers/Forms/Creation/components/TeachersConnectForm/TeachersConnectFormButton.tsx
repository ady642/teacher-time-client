import {FunctionComponent} from "react";
import {RegisterButtonProps} from "@/modules/Auth/components/RegisterModal/RegisterModalContent/RegisterButton";
import SubmitButton from "@/modules/Auth/components/Buttons/SubmitButton";
import useTranslation from "@/common/hooks/useTranslation";

interface TeachersCreateFormClassButtonProps extends Omit<RegisterButtonProps, 'registrationStatus'> {
	loginStatus: string
}

const TeachersCreateFormClassButton: FunctionComponent<TeachersCreateFormClassButtonProps> = ({ onClick, loginStatus }) => {
	const { t } = useTranslation()

	const submitMapping = {
		'OK': 11,
		'ERROR': -17,
		'LOADING': -60,
		'PENDING': -81
	}
	return <SubmitButton
		className="w-full h-14"
		submitStatus={loginStatus}
		onClick={onClick}
		label={t('commin.login')}
		submitMapping={submitMapping}
	/>
}

export default TeachersCreateFormClassButton
