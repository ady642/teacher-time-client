import {FunctionComponent, MutableRefObject, useEffect, useRef, useState} from "react";
import styles from './style.module.css'
import {SocketData} from "@/modules/Room/Whiteboard/types/SocketData";
import ChalkParams from "@/modules/Room/Whiteboard/types/ChalkParams";
import {socket} from "@/common/utils/client";

interface BoardProps {
	boardContainerRef: MutableRefObject<HTMLDivElement>;
	chalkParams: ChalkParams;
	setChalkParams: (chalkParams: ChalkParams) => void
}

const Board: FunctionComponent<BoardProps> = ({ chalkParams, setChalkParams, boardContainerRef }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const [drawing, setDrawing] = useState(false)

	const onMouseUp = (e: any) => {
		setDrawing(false);
		drawLine(chalkParams.x, chalkParams.y, e.pageX||e.touches[0].pageX, e.pageY||e.touches[0].pageY, chalkParams.color, true);
	}

	const onMouseDown = (e: any) => {
		setDrawing(true);
		setChalkParams({
			x: e.pageX||e.touches[0].pageX,
			y: e.pageY||e.touches[0].pageY,
			color: chalkParams.color
		})
	}

	const onMouseMove = (e: any): void => {
		if (!drawing) { return; }
		drawLine(chalkParams.x, chalkParams.y, e.pageX||e.touches[0].pageX, e.pageY||e.touches[0].pageY, chalkParams.color, true);
		setChalkParams({
			x: e.pageX||e.touches[0].pageX,
			y: e.pageY||e.touches[0].pageY,
			color: chalkParams.color
		})
	}

	const drawLine = (x0: number, y0: number, x1: number, y1: number, color: string, isEmitting = false) => {
		const canvas = canvasRef.current
		const context = canvas.getContext('2d')
		const rect = canvas.getBoundingClientRect();
		const offsetLeft = rect.left;
		const offsetTop = rect.top;

		context.beginPath();
		context.moveTo(x0 - offsetLeft - 12, y0 - offsetTop - 12); // 12 is for the borderWidth
		context.lineTo(x1 - offsetLeft - 12, y1 - offsetTop - 12);
		context.strokeStyle = color;
		context.lineWidth = 5;
		context.stroke();
		context.closePath();

		if (!isEmitting) { return; }
		let w = canvas.offsetWidth;
		let h = canvas.offsetHeight;

		socket.emit('drawing', {
			x0: x0 / w,
			y0: y0  / h,
			x1: x1 / w,
			y1: y1 / h,
			color: color
		});
	}

	const onDrawingEvent = (data: SocketData): void => {
		const canvas = canvasRef.current
		let w = canvas.offsetWidth;
		let h = canvas.offsetHeight;
		drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color);
	}

	const onResize = () => {
		const canvas = canvasRef.current
		const boardContainer = boardContainerRef.current
		canvas.width = boardContainer.offsetWidth - 200; // Padding of 200
		canvas.height = boardContainer.offsetHeight - 200;
	}

	useEffect(() => {
		socket.on('drawing', onDrawingEvent);
		window.addEventListener('resize', onResize, false);
		onResize()

		return () => {
			window.removeEventListener('resize', onResize, false)
		}
	}, [])

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
