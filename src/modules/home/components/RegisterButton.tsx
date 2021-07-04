import useTranslation from "@/common/hooks/useTranslation";
import useRoutePush from "@/common/hooks/useRoutePush";
import React, {FC} from 'react'


interface RegisterButtonProps {
	text: string
}

const RegisterButton: FC<RegisterButtonProps> = ({ text }) => {
	const { locale } = useTranslation()
	const { goTo } = useRoutePush()

	const goToContact = async () => {
		await goTo(locale, 'contact')
	}

	return 	<button onClick={goToContact} className={`rounded-3xl lg:text-lg sm:text-sm transition bg-orange hover:bg-red-700 text-white font-bold px-6 py-2 mt-8`}>
		{ text }
	</button>
}

export default  RegisterButton
