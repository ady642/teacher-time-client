import {FunctionComponent} from "react";

interface QuestionAnswerProps {
    onTextClick: () => void;
    firstText: string;
    secondText: string;
    className?: string
}

const QuestionAnswer: FunctionComponent<QuestionAnswerProps> = ({ className, onTextClick, firstText, secondText }) => {
	return <p className={`${className} text-sm my-4`}>
		<span>{ firstText }</span> <span onClick={() => onTextClick()} className={'ml-2 text-bluegreen font-bold cursor-pointer hover:text-green-700'}>{ secondText }</span>
	</p>
}

export default QuestionAnswer
