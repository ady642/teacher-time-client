import {FunctionComponent} from "react";

interface ErrorMessageProps {
    exception: string;
    className?: string
}

const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({ exception, className= 'absolute' }) => {
	return <span className={`text-red-700 ${className} -bottom-5 transition-all text-xs pt-1 ${exception ? 'text-opacity-100': 'text-opacity-0'}`}>{ exception }</span>
}

export default ErrorMessage
