import {FunctionComponent, MouseEventHandler} from "react";

interface ToolProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: any;
}

const Tool: FunctionComponent<ToolProps> = ({ onClick, children }) => {
	return <button onClick={onClick} className={'w-12 h-12 flex justify-center items-center rounded bg-transparent hover:bg-gray-300 my-2'}>
		{ children }
	</button>
}

export default Tool
