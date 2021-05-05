import {FunctionComponent, useEffect, useRef, useState} from "react";
import styles from './style.module.css'
import {SocketData} from "@/modules/Call/Whiteboard/types/SocketData";

interface BoardProps {
	socket: any
}

const Board: FunctionComponent<BoardProps> = ({ socket }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const [drawing, setDrawing] = useState(false)
	const [current, setCurrent] = useState({color: 'white', x: 0, y: 0 })

	const onMouseUp = (e: any) => {
		setDrawing(false);
		drawLine(current.x, current.y, e.screenX||e.touches[0].screenX, e.screenY||e.touches[0].screenY, current.color, true);
	}

	const onMouseDown = (e: any) => {
		console.log(e)
		setDrawing(true);
		setCurrent({
			x: e.screenX||e.touches[0].screenX,
			y: e.screenY||e.touches[0].screenY,
			color: current.color
		})
	}

	const onMouseMove = (e: any): void => {
		if (!drawing) { return; }
		drawLine(current.x, current.y, e.screenX||e.touches[0].screenX, e.screenY||e.touches[0].screenY, current.color, true);
		setCurrent({
			x: e.screenX||e.touches[0].screenX,
			y: e.screenY||e.touches[0].screenY,
			color: current.color
		})
	}

	const drawLine = (x0: number, y0: number, x1: number, y1: number, color: string, isEmitting = false) => {
		const canvas = canvasRef.current
		const context = canvas.getContext('2d')

		context.beginPath();
		context.moveTo(x0, y0);
		context.lineTo(x1, y1);
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
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	useEffect(() => {
		socket.on('drawing', onDrawingEvent);
		window.addEventListener('resize', onResize, false);
		onResize()
	}, [])

	return <div>
		<canvas
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
	</div>
}

export default Board
