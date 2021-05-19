import {FunctionComponent} from "react";
import Tool from "@/modules/Room/Whiteboard/components/Toolbox/Tool";
import {Create} from "@material-ui/icons";
import styles from '@/modules/Room/Whiteboard/components/Toolbox/tools.module.scss'
import Eraser from "@/common/components/Icons/Eraser";
import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";

interface ToolBoxProps {
	selectTool: (toolName: string) => void;
	tool: ToolInterface
}

const Index: FunctionComponent<ToolBoxProps> = ({ selectTool, tool }) => {
	const icons = [{ icon: Create, toolName: 'Pencil' }, { icon: Eraser, toolName: 'Eraser' }]

	return <aside className={styles.tools}>
		{ icons.map(({ icon, toolName}) => <Tool
			selectTool={selectTool} key={toolName} Icon={icon} tool={tool} name={toolName}
		/>) }
	</aside>
}

export default Index
