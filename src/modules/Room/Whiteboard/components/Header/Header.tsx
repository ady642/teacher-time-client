import {FunctionComponent, useEffect, useState} from "react";
import UserInfos from "@/modules/Room/Whiteboard/components/Header/UserInfos";
import TimeInfos from "@/modules/Room/Whiteboard/components/Header/TimeInfos";

interface HeaderProps {

}

const Header: FunctionComponent<HeaderProps> = () => {
	const [count, setCount] = useState<number>(0)
	const [balanceCoins, setBalanceCoins] = useState<number>(20)

	useEffect(() => {
		const countInterval = setInterval(() => {
			setCount(count + 1)
		}, 1000)

		const balanceInterval = setInterval(() => {
			setBalanceCoins(Math.floor(20 - 0.1 * count))
			if(balanceCoins <= 0) {
				setBalanceCoins(0)
				clearInterval(balanceInterval)
			}
		}, 1000)

		return () => {
			clearInterval(countInterval)
			clearInterval(balanceInterval)
		}
	}, [count])

	return	<div className="flex flex-wrap justify-content text-lg lg:text-2xl">
		<UserInfos
			className={'justify-start'}
			userType={'Teacher'}
			name={'Yohan Lanszlo'}
		/>
		<TimeInfos
			count={count}
			balanceCoins={balanceCoins}
		/>
		<UserInfos
			className={'sm:justify-end'}
			userType={'Student'}
			name={'Invité 2705'}
		/>
	</div>
}

export default Header
