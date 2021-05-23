import {FunctionComponent, MutableRefObject, useRef} from "react";
import styles from './style.module.scss'
import useBoard from "@/modules/Room/Whiteboard/hooks/useBoard";
import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";

interface BoardProps {
	boardContainerRef: MutableRefObject<HTMLDivElement>;
	tool: ToolInterface;
	canvasRef: any
}

const Board: FunctionComponent<BoardProps> = ({ boardContainerRef, canvasRef, tool }) => {
	const { onMouseDown, onMouseMove, onMouseUp, onTouchStart, onTouchEnd, onTouchMove } =  useBoard(boardContainerRef, canvasRef, tool)

	return <canvas
		className={styles.board}
		id="board"
		ref={canvasRef}
		onMouseDown={(e) => onMouseDown(e)}
		onMouseUp={(e) => onMouseUp(e)}
		onMouseMove={(e) => onMouseMove(e)}
		onTouchStart={(e) => onTouchStart(e)}
		onTouchEnd={(e) => onTouchEnd(e)}
		onTouchMove={(e) => onTouchMove(e)}
	/>
}

export default Board
