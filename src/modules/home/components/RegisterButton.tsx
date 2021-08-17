import React, {FC} from 'react'
import TailwindButton from "@/common/components/Buttons/TailwindButton";

interface RegisterButtonProps {
	text: string;
	onClick: () => void;
}

const RegisterButton: FC<RegisterButtonProps> = ({ text, onClick }) => {
	return <TailwindButton onClick={onClick} className={`rounded-3xl lg:text-lg sm:text-sm transition hover:bg-green-700 text-white font-bold px-6 py-2 mt-8`}>
		{ text }
	</TailwindButton>
}

export default  RegisterButton
