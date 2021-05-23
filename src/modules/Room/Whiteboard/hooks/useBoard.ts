import {MutableRefObject, useEffect, useState, useRef} from "react";
import ChalkParams from "@/modules/Room/Whiteboard/interfaces/ChalkParams";
import {socket} from "@/common/utils/client";
import {SocketData} from "@/modules/Room/Whiteboard/types/SocketData";
import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";
import useTouchEvents from '@/modules/Room/Whiteboard/hooks/useTouchEvents';
import useMouseEvents from "@/modules/Room/Whiteboard/hooks/useMouseEvents";

interface Point {
	x: number,
	y: number
}

const useBoard = (boardContainerRef: MutableRefObject<HTMLDivElement>, canvasRef: MutableRefObject<HTMLCanvasElement>, tool: ToolInterface) => {
	const [drawing, setDrawing] = useState(false)
	const [chalkParams, setChalkParams] = useState<ChalkParams>({ width: tool.width, color: tool.color, x: 0, y: 0})
	const pointsRef: MutableRefObject<{x: number, y: number}[]>  = useRef<{x: number, y: number}[]>([])

	const clearPoints = () => {
		pointsRef.current = []
	}

	const drawLine = (x0: number, y0: number, x1: number, y1: number, color: string, width: number, isEmitting = false) => {
		if(drawing === false) {
			return
		}

		const canvas = canvasRef.current
		const points = pointsRef.current
		const context = canvas.getContext('2d')
		const rect = canvasRef.current.getBoundingClientRect();

		const offsetLeft = rect.left;
		const offsetTop = rect.top;

		// Style
		context.strokeStyle = color;
		context.fillStyle = color;
		context.lineWidth = width;
		context.lineCap = 'round';

		// Saving all the points in an array
		points.push({x: x1 - offsetLeft, y: y1 - offsetTop});

		// Create points
		if (points.length < 3) {
			const firstPoint = points[0];
			context.beginPath();
			context.arc(firstPoint.x, firstPoint.y, context.lineWidth / 2, 0, Math.PI * 2, !0);
			context.fill();
			context.closePath();

			return;
		}

		// Create curve between points
		context.beginPath();
		let i = 1

		const findBPrim = (A: Point, B: Point, Cy: number): Point => {
			const coeffDirecteur = (B.y - A.y) / (B.x - A.x)
			const BPrimx = B.x + ((Cy - B.y) / coeffDirecteur)
			const BPrimy = Cy

			return {
				x: BPrimx,
				y: BPrimy
			}
		}

		const findCPrim = (C: Point, D: Point, By: number): Point => {
			const coeffDirecteur = (D.y - C.y) / (D.x - C.x)
			const CPrimx = C.x + ((By - C.y) / coeffDirecteur)
			const CPrimy = By

			return {
				x: CPrimx,
				y: CPrimy
			}
		}

		for (i; i < points.length - 3; i++) {
			const A = points[i]
			const B = points[i + 1]
			const C = points[i + 2]
			const D = points[i + 3]
			const BPrim = findBPrim(A, B, C.y)
			const CPrim = findCPrim(C, D, B.y)

			context.moveTo(B.x, B.y)
			context.bezierCurveTo(BPrim.x, BPrim.y, CPrim.x, CPrim.y, D.x, D.y);
		}

		// For the last 2 points
		context.quadraticCurveTo(
			points[i].x,
			points[i].y,
			points[i + 1].x,
			points[i + 1].y
		);
		context.stroke();


		// Data Emission
		if (!isEmitting) { return; }
		let w = canvas.offsetWidth;
		let h = canvas.offsetHeight;

		socket.emit('drawing', { x0: x0 / w, y0: y0 / h, x1: x1 / w, y1: y1 / h, color, width});
	}

	const {onTouchStart, onTouchMove, onTouchEnd} = useTouchEvents(drawing, setDrawing, chalkParams, setChalkParams, drawLine, clearPoints)
	const {onMouseUp, onMouseMove, onMouseDown,} = useMouseEvents(drawing, setDrawing, chalkParams, setChalkParams, drawLine, clearPoints)

	useEffect(() => {
		setChalkParams({ ...chalkParams, color: tool.color, width: tool.width })
	}, [tool.color, tool.width])

	const onDrawingEvent = (data: SocketData): void => {
		const canvas = canvasRef.current
		let w = canvas.offsetWidth;
		let h = canvas.offsetHeight;
		drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color, data.width);
	}

	const onResize = () => {
		const canvas = canvasRef.current
		const boardContainer = boardContainerRef.current
		canvas.width = boardContainer.offsetWidth;
		canvas.height = boardContainer.offsetHeight;
	}

	useEffect(() => {
		socket.on('drawing', onDrawingEvent);
		window.addEventListener('resize', onResize, false);
		onResize()

		return () => {
			window.removeEventListener('resize', onResize, false)
		}
	}, [])

	return {
	    onMouseMove, onMouseDown, onMouseUp,
		onTouchStart, onTouchMove, onTouchEnd
	}
}

export default useBoard
