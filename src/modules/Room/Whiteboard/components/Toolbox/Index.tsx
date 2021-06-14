import {createElement, FunctionComponent, useEffect, useState} from "react";
import Tool from "@/modules/Room/Whiteboard/components/Toolbox/Tool";
import {Create, Delete} from "@material-ui/icons";
import styles from '@/modules/Room/Whiteboard/components/Toolbox/tools.module.scss'
import Eraser from "@/common/components/Icons/Eraser";
import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";
import WidthSelection from "@/modules/Room/Whiteboard/components/Toolbox/WidthSelection/WidthSelectionContainer";
import Pencil from "@/modules/Room/Whiteboard/models/Pencil";
import EraserModel from "@/modules/Room/Whiteboard/models/Eraser";
import TextBox from "@/modules/Room/Whiteboard/models/TextBox";
import LogoTextBox from "@/common/components/Logos/LogoTextBox";
import LogoColorSelector from "@/common/components/Logos/LogoColorSelector";
import ColorSelector from "@/modules/Room/Whiteboard/models/ColorSelector";

interface ToolBoxProps {
	setTool: (tool: ToolInterface) => void;
	tool: ToolInterface;
	clearCanvas: () => void
}

const Index: FunctionComponent<ToolBoxProps> = ({ setTool, tool, clearCanvas}) => {
	const [width, setWidth] = useState(5)

	const icons = [
		{ component: Create, toolName: 'Pencil' },
		{ component: Eraser, toolName: 'Eraser' },
		{ component: LogoTextBox, toolName: 'TextBox' },
		{ component: LogoColorSelector, toolName: 'ColorSelector' },
	]

	const selectTool = (toolName: string) => {
		const toolMap = new Map()
		toolMap.set('Pencil',  new Pencil())
		toolMap.set('Eraser',  new EraserModel())
		toolMap.set('TextBox',  new TextBox())
		toolMap.set('ColorSelector',  new ColorSelector())

		setTool(toolMap.get(toolName))
		setWidth(5)
	}

	const setWidthOnTool = (width: number) => {
		setTool({...tool, width})
	}

	useEffect(() => {
		setWidthOnTool(width)
	}, [width])

	return <aside className={styles.tools}>
		{ icons.map(({ component, toolName}) => <Tool
			onClick={() => selectTool(toolName)} key={toolName}>
			{
				createElement(component)
			}
		</Tool>)
		}
		
		<WidthSelection setWidth={setWidth} width={width}/>
		<Tool onClick={clearCanvas}>
			<Delete />
		</Tool>
	</aside>
}

export default Index
