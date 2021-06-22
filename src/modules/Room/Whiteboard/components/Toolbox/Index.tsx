import {createElement, FunctionComponent, useEffect, useState} from "react";
import Tool from "@/modules/Room/Whiteboard/components/Toolbox/Tool";
import {Delete} from "@material-ui/icons";
import styles from '@/modules/Room/Whiteboard/components/Toolbox/tools.module.scss'
import Eraser from "@/common/components/Icons/Eraser";
import Pen from "@/common/components/Icons/Pencil";
import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";
import WidthSelection from "@/modules/Room/Whiteboard/components/Toolbox/WidthSelection/WidthSelectionContainer";
import Pencil from "@/modules/Room/Whiteboard/models/Pencil";
import EraserModel from "@/modules/Room/Whiteboard/models/Eraser";
import TextBox from "@/modules/Room/Whiteboard/models/TextBox";
import TextBoxIcon from "@/common/components/Icons/TextBox";
import {Case, Switch} from "react-switch-case-module";

interface ToolBoxProps {
	setTool: (tool: ToolInterface) => void;
	tool: ToolInterface;
	clearCanvas: () => void
}

const Index: FunctionComponent<ToolBoxProps> = ({ setTool, tool, clearCanvas}) => {
	const [width, setWidth] = useState(5)

	const icons = [
		{ toolName: 'Pencil', action: 'Dessiner' },
		{ toolName: 'Eraser', action: 'Gommer' },
		{ toolName: 'TextBox', action: 'Texte' },
	]

	const selectTool = (toolName: string) => {
		const toolMap = new Map()
		toolMap.set('Pencil',  new Pencil())
		toolMap.set('Eraser',  new EraserModel())
		toolMap.set('TextBox',  new TextBox())

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
		{ icons.map(({ toolName, action}) => <Tool
			onClick={() => selectTool(toolName)} key={toolName} subtitle={action} active={toolName === tool.name}>
			<Switch componentName={toolName} defaultComponent={<Pen active={false}/>}>
				<Case value={'Pencil'}><Pen active={toolName === tool.name}/></Case>
				<Case value={'Eraser'}><Eraser active={toolName === tool.name}/></Case>
				<Case value={'TextBox'}><TextBoxIcon active={toolName === tool.name}/></Case>
			</Switch>
		</Tool>)
		}

		<WidthSelection setWidth={setWidth} width={width}/>
		<Tool onClick={clearCanvas} subtitle={'Tout effacer'}>
			<Delete />
		</Tool>
	</aside>
}

export default Index
