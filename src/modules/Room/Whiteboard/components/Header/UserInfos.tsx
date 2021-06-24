import {FunctionComponent, useState} from "react";
import Image from "next/image";
import Microphone from "@/modules/Room/Whiteboard/components/Header/Microphone";

interface UserInfosProps {
	userType: string;
	name: string;
	className?: string;
}

const UserInfos: FunctionComponent<UserInfosProps> = ({ className = '', userType, name }) => {
	const [muted, setMuted] = useState(false)

	return <div className={`flex items-center flex-1 ${className}`}>
		<span className="text-blueviolet font-bold mr-2">
			{userType}:
		</span>
		<div className="mx-4">
			<Image width={48} height={48} className="rounded-full border border-solid border-red-600" src="/img/avatar.png" alt='microphone muted' />
		</div>
		<span className="text-gray-800">
			{name}
		</span>
		<div className="ml-8 pt-1">
			<Microphone muted={muted} setMuted={setMuted} />
		</div>
	</div>
}

export default UserInfos
