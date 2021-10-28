import {FunctionComponent, MutableRefObject, useState, MouseEvent} from "react";
import styles from './style.module.scss'
import useBoard from "@/modules/Room/Whiteboard/hooks/useBoard";
import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";
import {Socket} from "socket.io-client";

interface BoardProps {
	boardContainerRef: MutableRefObject<HTMLDivElement>;
	tool: ToolInterface;
	canvasRef: any;
	roomID: string;
	textBoxRef: MutableRefObject<HTMLTextAreaElement>;
	className?: string;
	socket: Socket
}

const Board: FunctionComponent<BoardProps> = ({ className = '', boardContainerRef, canvasRef, tool, roomID, textBoxRef, socket }) => {
	const { onMouseDown, onMouseMove, onMouseUp, onRightClick, onMouseOut } =  useBoard(boardContainerRef, canvasRef, tool, roomID, textBoxRef, socket)

	return <canvas
		className={`${styles.board} ${className}`}
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
