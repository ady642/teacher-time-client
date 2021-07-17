import React, {FunctionComponent, MutableRefObject} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import {ButtonProps} from "@/common/types/button";

type RegisterButtonProps = Omit<ButtonProps, 'children'> & { registerActivatorRef: MutableRefObject<HTMLButtonElement> }

const RegisterActivator: FunctionComponent<RegisterButtonProps> = ({ onClick, registerActivatorRef }) => {
	const { t } = useTranslation()

	return <button ref={registerActivatorRef} onClick={() => onClick()} className={`rounded-3xl lg:text-lg sm:text-sm text-xs transition bg-orange hover:bg-red-700 text-white font-bold md:px-6 md:py-2 px-2 py-1`}>
		{ t('common.register') }
	</button>
}

export default RegisterActivator
