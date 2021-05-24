import {FunctionComponent, useEffect, useRef, useState} from "react";
import Board from "@/modules/Room/Whiteboard/Board";
import styles from './style.module.scss'
import Toolbox from '@/modules/Room/Whiteboard/components/Toolbox/Index'
import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";
import Pencil from "@/modules/Room/Whiteboard/models/Pencil";

interface BoardContainerProps {
	socket: any
}

const BoardContainer: FunctionComponent<BoardContainerProps> = ({ socket }) => {
	const boardContainerRef = useRef<HTMLDivElement>(null)
	const [tool, setTool] = useState<ToolInterface>(new Pencil())
	const [cursorClass, setCursorClass] = useState<string>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const cursorClass: string = tool.name === 'Pencil' ? styles.pencilCursor : styles.eraserCursor
		setCursorClass(cursorClass)
	}, [tool])

	useEffect(() => {
		socket.on('on-clear-canvas', () => clearCanvas())
	})

	const clearCanvas = () => {
		const context = canvasRef.current.getContext('2d');
		context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
	}

	const emitToClear = () => {
		socket.emit('clear-canvas')
	}

	return <div ref={boardContainerRef} className={`${styles.shade} ${cursorClass}`}>
		<Toolbox clearCanvas={emitToClear} tool={tool} setTool={setTool} />
		<Board canvasRef={canvasRef} tool={tool} boardContainerRef={boardContainerRef}/>
	</div>
}

export default BoardContainer
