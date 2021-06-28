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
		<button onClick={() => onClick()} style={{fontSize:'1.5vw', marginTop: '2vw'}} className={`flex items-center font-bold lg:flex text-blue-900 cursor-pointer capitalize hover:text-green-500 transition`}>
			{ text }
		</button>

	)
}

export default HomeButton
