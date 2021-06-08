import {FunctionComponent, useEffect, useRef, useState} from "react";
import Board from "@/modules/Room/Whiteboard/Board";
import styles from './style.module.scss'
import Toolbox from '@/modules/Room/Whiteboard/components/Toolbox/Index'
import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";
import Pencil from "@/modules/Room/Whiteboard/models/Pencil";
import InputText from "./components/Toolbox/InputText";

interface BoardContainerProps {
	socket: any;
	roomID: string

}

const BoardContainer: FunctionComponent<BoardContainerProps> = ({ socket, roomID }) => {
	const boardContainerRef = useRef<HTMLDivElement>(null)
	const [tool, setTool] = useState<ToolInterface>(new Pencil())
	const [cursorClass, setCursorClass] = useState<string>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const textBoxRef = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		const cursorClass: string = tool.name === 'Pencil' ? styles.pencilCursor : styles.eraserCursor
		setCursorClass(cursorClass)
	}, [tool])

	useEffect(() => {
		socket.on('on-clear-canvas', clearCanvas)
	})

	const clearCanvas = () => {
		const context = canvasRef.current.getContext('2d');
		context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
	}

	const emitToClear = () => {
		socket.emit('clear-canvas', roomID)
	}

	return <div ref={boardContainerRef} className={`${styles.shade} ${cursorClass}`}>
		
		<InputText textBoxRef={textBoxRef}/>
		<Toolbox clearCanvas={emitToClear} tool={tool} setTool={setTool} />
		<Board
			canvasRef={canvasRef}
			tool={tool}
			boardContainerRef={boardContainerRef}
			roomID={roomID}
			textBoxRef={textBoxRef}
			
		/>
	</div>
}

export default BoardContainer
