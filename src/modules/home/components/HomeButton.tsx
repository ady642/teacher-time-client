import useRoutePush from "@/common/hooks/useRoutePush";
import React, {FC} from 'react'

interface HomeButtonProps {
	text: string | JSX.Element;
    url?: string;
    callback?: () => void;
}

const HomeButton: FC<HomeButtonProps> = ({ text, url, callback}) => {
	const { goTo } = useRoutePush()

	const onClick = async () => {
		if(url) {
			await goTo(url)
		} else {
			callback()
		}
	}

	return (
		<button onClick={() => onClick()} className={`flex lg:text-3xl md:text-2xl text-lg items-center font-bold lg:flex text-blue-900 cursor-pointer md:mt-8 mt-3 hover:text-green-500 transition`}>
			{ text }
		</button>
	)
}

export default HomeButton
