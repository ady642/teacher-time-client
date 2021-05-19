import {FunctionComponent} from "react";
import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool"

interface ToolProps {
    selectTool: (toolName: string) => void;
    Icon: FunctionComponent;
    tool: ToolInterface;
    name: string;
}

const Tool: FunctionComponent<ToolProps> = ({ selectTool, Icon, name }) => {
	return <button onClick={() => selectTool(name)} className={'w-12 h-12 flex justify-center items-center rounded bg-transparent hover:bg-gray-300 my-2'}>
		<Icon />
	</button>
}

export default Tool
