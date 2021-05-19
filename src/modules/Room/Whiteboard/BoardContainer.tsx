import {FunctionComponent, useRef, useState} from "react";
import Board from "@/modules/Room/Whiteboard/Board";
import styles from './style.module.css'
import Toolbox from '@/modules/Room/Whiteboard/components/Toolbox/Index'
import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";
import Pencil from "@/modules/Room/Whiteboard/models/Pencil";
import Eraser from "@/modules/Room/Whiteboard/models/Eraser";

const BoardContainer: FunctionComponent = () => {
	const boardContainerRef = useRef<HTMLDivElement>(null)
	const [tool, setTool] = useState<ToolInterface>(new Pencil())

	const selectTool = (toolName: string) => {
		const tool: ToolInterface = toolName === 'Pencil' ? new Pencil() : new Eraser()
		const cursor: string = toolName === 'Pencil' ? '/img/pencil.png' : '/img/eraser.svg'
		setTool(tool)
	}

	return <div ref={boardContainerRef} className={styles.shade} style={{}>
		<Toolbox tool={tool} selectTool={selectTool}/>
		<Board tool={tool} boardContainerRef={boardContainerRef}/>
	</div>
}

export default BoardContainer
