import {FunctionComponent, useEffect, useRef, useState} from "react";
import Board from "@/modules/Room/Whiteboard/Board";
import styles from './style.module.scss'
import Toolbox from '@/modules/Room/Whiteboard/components/Toolbox/Index'
import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";
import Pencil from "@/modules/Room/Whiteboard/models/Pencil";

const BoardContainer: FunctionComponent = () => {
	const boardContainerRef = useRef<HTMLDivElement>(null)
	const [tool, setTool] = useState<ToolInterface>(new Pencil())
	const [cursorClass, setCursorClass] = useState<string>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const cursorClass: string = tool.name === 'Pencil' ? styles.pencilCursor : styles.eraserCursor
		setCursorClass(cursorClass)
	}, [tool])

	const clearCanvas = () => {
		const context = canvasRef.current.getContext('2d');
		context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
	}

	return <div ref={boardContainerRef} className={`${styles.shade} ${cursorClass}`}>
		<Toolbox clearCanvas={clearCanvas} tool={tool} setTool={setTool} />
		<Board canvasRef={canvasRef} tool={tool} boardContainerRef={boardContainerRef}/>
	</div>
}

export default BoardContainer
