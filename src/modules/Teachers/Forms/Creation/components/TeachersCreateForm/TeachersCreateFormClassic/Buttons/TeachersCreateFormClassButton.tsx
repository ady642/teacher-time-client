import {FunctionComponent} from "react";
import {RegisterButtonProps} from "@/modules/Auth/components/RegisterModal/RegisterModalContent/RegisterButton";
import SubmitButton from "@/modules/Auth/components/Buttons/SubmitButton";
import useTranslation from "@/common/hooks/useTranslation";

interface TeachersCreateFormClassButtonProps extends RegisterButtonProps {}

const TeachersCreateFormClassButton: FunctionComponent<TeachersCreateFormClassButtonProps> = ({ onClick, registrationStatus }) => {
	const { t } = useTranslation()

	const submitMapping = {
		'OK': 11,
		'ERROR': -17,
		'LOADING': -47,
		'PENDING': -81
	}

	return <SubmitButton
		className="w-full h-14"
		submitStatus={registrationStatus}
		onClick={onClick}
		label={t('commin.register')}
		submitMapping={submitMapping}
	/>
}

export default TeachersCreateFormClassButton
