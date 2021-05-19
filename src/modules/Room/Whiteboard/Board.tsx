import {FunctionComponent, MutableRefObject, useRef} from "react";
import styles from './style.module.css'
import useBoard from "@/modules/Room/Whiteboard/hooks/useBoard";
import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";

interface BoardProps {
	boardContainerRef: MutableRefObject<HTMLDivElement>;
	tool: ToolInterface
}

const Board: FunctionComponent<BoardProps> = ({ boardContainerRef, tool }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	const { onMouseDown, onMouseMove, onMouseUp} =  useBoard(boardContainerRef, canvasRef, tool)

	return <canvas
		className={styles.board}
		id="board"
		ref={canvasRef}
		onMouseDown={(e) => onMouseDown(e)}
		onMouseUp={(e) => onMouseUp(e)}
		onMouseMove={(e) => onMouseMove(e)}
		onTouchStart={(e) => onMouseDown(e)}
		onTouchEnd={(e) => onMouseUp(e)}
		onTouchMove={(e) => onMouseMove(e)}
	/>
}

export default Board
