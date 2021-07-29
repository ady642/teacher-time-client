import {FunctionComponent} from "react";

interface QuestionAnswerProps {
    onTextClick: () => void;
    firstText: string;
    secondText: string;
}

const QuestionAnswer: FunctionComponent<QuestionAnswerProps> = ({ onTextClick, firstText, secondText }) => {
	return <p className={'text-sm my-4'}>
		<span>{ firstText }</span> <span onClick={() => onTextClick()} className={'ml-2 text-orange font-bold cursor-pointer hover:text-red-600'}>{ secondText }</span>
	</p>
}

export default QuestionAnswer
