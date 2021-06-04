import {FunctionComponent, MutableRefObject} from "react";
import styles from './style.module.scss'
import useBoard from "@/modules/Room/Whiteboard/hooks/useBoard";
import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";

interface BoardProps {
	boardContainerRef: MutableRefObject<HTMLDivElement>;
	tool: ToolInterface;
	canvasRef: any;
	roomID: string
}

const Board: FunctionComponent<BoardProps> = ({ boardContainerRef, canvasRef, tool, roomID }) => {
	const { onMouseDown, onMouseMove, onMouseUp, onRightClick, onMouseOut } =  useBoard(boardContainerRef, canvasRef, tool, roomID)

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
		onMouseOut={() => onMouseOut()}
		onContextMenu={onRightClick}
	/>
}

export default Board
