import {FunctionComponent, MouseEventHandler} from "react";

interface ToolProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: any;
    subtitle?: string;
    active?: boolean;
}

const Tool: FunctionComponent<ToolProps> = ({ active = false, onClick, children, subtitle = '' }) => {
	return <button onClick={onClick} className={'w-16 h-16 flex flex-col justify-center items-center rounded bg-transparent p-3 hover:bg-purple-400 transition my-4'}>
		{ children }
		<span className={`text-xs mt-1 tracking-normal transition ${active ? 'text-red-400': ''}`}>
			{subtitle}
		</span>
	</button>
}

export default Tool
