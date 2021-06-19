import {FunctionComponent, MouseEventHandler} from "react";

interface ToolProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: any;
}

const Tool: FunctionComponent<ToolProps> = ({ onClick, children }) => {
	return <button onClick={onClick} className={'w-16 h-16 flex flex-col justify-center items-center rounded bg-transparent p-3 hover:bg-purple-400 transition my-4'}>
		{ children }
		<span className="text-xs mt-1 tracking-normal">
            Draw
		</span>
	</button>
}

export default Tool
