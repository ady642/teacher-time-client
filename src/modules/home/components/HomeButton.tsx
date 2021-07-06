import useRoutePush from "@/common/hooks/useRoutePush";
import React, {FC} from 'react'
import useTranslation from "@/common/hooks/useTranslation";

interface HomeButtonProps {
	text: string;
    url: string;
}

const HomeButton: FC<HomeButtonProps> = ({ text, url}) => {
	const { goTo } = useRoutePush()
	const { locale } = useTranslation()

	const onClick = async () => {
		await goTo(locale, url)
	}

	return (
		<button onClick={() => onClick()} className={`flex lg:text-3xl md:text-2xl text-lg items-center font-bold lg:flex text-blue-900 cursor-pointer md:mt-8 mt-3 hover:text-green-500 transition`}>
			{ text }
		</button>
	)
}

export default HomeButton
