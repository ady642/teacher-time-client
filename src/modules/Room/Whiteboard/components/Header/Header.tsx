import {FunctionComponent, useState} from "react";
import UserInfos from "@/modules/Room/Whiteboard/components/Header/UserInfos";
import TimeInfos from "@/modules/Room/Whiteboard/components/Header/TimeInfos";

interface HeaderProps {

}

const Header: FunctionComponent<HeaderProps> = () => {
	const [count, setCount] = useState<number>(0)

	return	<div className="flex flex-wrap justify-content text-lg lg:text-2xl">
		<UserInfos
			className={'justify-start'}
			userType={'Teacher'}
			name={'Jon Smith'}
		/>
		<TimeInfos
			count={count}
			setCount={setCount}
		/>
		<UserInfos
			className={'justify-end'}
			userType={'Student'}
			name={'Paul Alone'}
		/>
	</div>
}

export default Header
