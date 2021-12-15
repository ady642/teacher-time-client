import {FunctionComponent} from "react";

interface IconProps {
	className?: string
}

const WavingHand: FunctionComponent<IconProps> = ({ className }) => {
	return <img className={className} src='/img/icon/waving-hand.svg' alt='hand'/>
}

export default WavingHand
