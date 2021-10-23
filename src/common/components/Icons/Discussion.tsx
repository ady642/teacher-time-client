import {FunctionComponent} from "react";

interface MastercardProps {
	className?: string
}

const Mastercard: FunctionComponent<MastercardProps> = ({ className }) => {
	return <img className={className} src='/img/icon/discussion.svg' alt='discussion'/>
}

export default Mastercard
