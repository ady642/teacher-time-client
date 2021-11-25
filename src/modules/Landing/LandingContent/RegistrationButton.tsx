import {FunctionComponent} from "react";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import useTranslation from "@/common/hooks/useTranslation";
import {ButtonProps} from "@/common/types/button";

interface RegistrationButtonProps extends Pick<ButtonProps, 'onClick'> {}

const RegistrationButton: FunctionComponent<RegistrationButtonProps> = ({ onClick }) => {
	const { t } = useTranslation()

	return <TailwindButton onClick={onClick}>
		{ t('landing.teacher.registration') }
	</TailwindButton>
}

export default RegistrationButton
