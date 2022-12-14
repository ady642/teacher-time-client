import {FunctionComponent, useEffect, useRef, useState} from "react";
import Board from "@/modules/Room/Whiteboard/Board";
import styles from './style.module.scss'
import Toolbox from '@/modules/Room/Whiteboard/components/Toolbox/Index'
import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";
import Pencil from "@/modules/Room/Whiteboard/models/Pencil";
import InputText from "./components/Toolbox/InputText";
import ZoomIcons from "@/modules/Room/Whiteboard/components/ZoomIcons";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import Header from "@/modules/Room/Whiteboard/components/Header/Header";

interface BoardContainerProps {
	socket: any;
	roomID: string;
	duration: number;
	setDuration: (value: number) => void;
	studentName: string;
	teacherName: string;
}

const BoardContainer: FunctionComponent<BoardContainerProps> = ({ socket, teacherName, studentName, roomID, duration, setDuration }) => {
	const boardContainerRef = useRef<HTMLDivElement>(null)
	const [tool, setTool] = useState<ToolInterface>(new Pencil())
	const [cursorClass, setCursorClass] = useState<string>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const textBoxRef = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		const cursorClass: string = tool.name === 'Pencil' ? styles.pencilCursor : styles.eraserCursor
		setCursorClass(cursorClass)
	}, [tool])

	const emitToClear = () => {
		socket.emit('clear-canvas', roomID)
	}

	return <div ref={boardContainerRef} className={`${styles.shade}`}>
		<InputText textBoxRef={textBoxRef}/>
		<div className="flex flex-col">
			<Header
				studentName={studentName}
				teacherName={teacherName}
				setDuration={setDuration}
				duration={duration}
			/>
			<div className="flex justify-between mt-28">
				<Toolbox clearCanvas={emitToClear} tool={tool} setTool={setTool} />
				<Board
					canvasRef={canvasRef}
					tool={tool}
					boardContainerRef={boardContainerRef}
					roomID={roomID}
					textBoxRef={textBoxRef}
					className={cursorClass}
					socket={socket}
				/>
				<div className="flex w-28 pb-16 pr-2 justify-start items-center">
					<ZoomIcons />
				</div>
			</div>
			<div className={'flex w-full justify-center items-center mt-14'}>
				<TailwindButton onClick={() => alert('finish room')} className={'w-60 p-2'}>
					Terminer la classe
				</TailwindButton>
			</div>
		</div>
	</div>
}

export default BoardContainer
