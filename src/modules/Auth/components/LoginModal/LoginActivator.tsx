import React, {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import {ButtonProps} from "@/common/types/button";

type LoginButtonProps = Omit<ButtonProps, 'children'>

const LoginActivator: FunctionComponent<LoginButtonProps> = ({ onClick }) => {
	const { t } = useTranslation()

	return <button onClick={() => onClick()} className={`mr-4 rounded-3xl lg:text-lg sm:text-sm text-xs transition bg-transparent hover:text-red-600 text-orange font-bold md:px-3 md:py-2 px-2 py-1`}>
		{ t('common.login') }
	</button>
}

export default LoginActivator
