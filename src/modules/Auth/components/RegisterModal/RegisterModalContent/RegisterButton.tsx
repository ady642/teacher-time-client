import {FunctionComponent} from "react";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import useTranslation from "@/common/hooks/useTranslation";
import {ButtonProps} from "@/common/types/button";

interface RegisterButtonProps extends Omit<ButtonProps, 'children'> {}

const RegisterButton: FunctionComponent<RegisterButtonProps> = ({ className, onClick }) => {
	const { t } = useTranslation()

	return <TailwindButton type={'button'} onClick={onClick} className={`px-16 py-1 text-lg mt-3 ${className}`}>
		{ t('common.register') }
	</TailwindButton>
}

export default RegisterButton
