import {FunctionComponent, useEffect} from "react";
import UserInfos from "@/modules/Room/Whiteboard/components/Header/UserInfos";
import TimeInfos from "@/modules/Room/Whiteboard/components/Header/TimeInfos";

interface HeaderProps {
	studentName: string;
	teacherName: string;
	duration: number;
	setDuration: (value: number) => void;
}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) => {
	const { studentName, teacherName, setDuration, duration } = props

	useEffect(() => {
		const countInterval = setInterval(() => {
			setDuration(duration + 1)
		}, 1000)

		return () => {
			clearInterval(countInterval)
		}
	}, [duration])

	return	<div className="flex flex-wrap justify-content text-lg lg:text-2xl">
		<UserInfos
			className={'justify-start'}
			userType={'Teacher'}
			name={teacherName}
		/>
		<TimeInfos
			count={duration}
		/>
		<UserInfos
			className={'sm:justify-end'}
			userType={'Student'}
			name={studentName}
		/>
	</div>
}

export default Header
