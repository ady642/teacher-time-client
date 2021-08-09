import {FunctionComponent} from "react";

interface MastercardProps {
	className: string
}

const Mastercard: FunctionComponent<MastercardProps> = ({ className }) => {
	return <img className={className} src='/img/icon/mastercard.svg' alt='visa'/>
}

export default Mastercard
