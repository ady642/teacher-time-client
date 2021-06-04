import {MutableRefObject, useEffect, useState, useRef} from "react";
import ChalkParams from "@/modules/Room/Whiteboard/interfaces/ChalkParams";
import {socket} from "@/common/utils/client";
import {SocketData} from "@/modules/Room/Whiteboard/types/SocketData";
import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";
import useMouseEvents from "@/modules/Room/Whiteboard/hooks/useMouseEvents";
import Point from "@/modules/Room/Whiteboard/interfaces/Point";
import { linearCurve } from "@/modules/Room/Whiteboard/utils";

const useBoard = (boardContainerRef: MutableRefObject<HTMLDivElement>, canvasRef: MutableRefObject<HTMLCanvasElement>, tool: ToolInterface, roomID: string) => {
	const [drawing, setDrawing] = useState(false)
	const [chalkParams, setChalkParams] = useState<ChalkParams>({ width: tool.width, color: tool.color, x: 0, y: 0})
	const pointsRef: MutableRefObject<Point[]>  = useRef<Point[]>([])
	const [rightClickActivated, setRightClickActivated] = useState(false)

	const clearPoints = () => {
		pointsRef.current = []
	}

	const drawLine = (x0: number, y0: number, x1: number, y1: number, color: string, width: number, isEmitting = false) => {
		const canvas = canvasRef.current
		//let points = pointsRef.current
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
		//points.push({x: x0 - offsetLeft, y: y0 - offsetTop});

		// Create curve between points
		const A = { x: x0 - offsetLeft, y: y0 - offsetTop }
		const B = { x: x1 - offsetLeft, y: y1 - offsetTop }
		linearCurve(context, A, B);

		// Data Emission
		if (!isEmitting) { return; }
		let w = canvas.offsetWidth;
		let h = canvas.offsetHeight;

		socket.emit('drawing', { x0: x0 / w, y0: y0 / h, x1: x1 / w, y1: y1 / h, color, width, roomID});
	}

	const {onMouseUp, onMouseMove, onMouseDown, onMouseOut, onRightClick} = useMouseEvents(drawing, setDrawing, chalkParams, setChalkParams, drawLine, clearPoints, setRightClickActivated, rightClickActivated)

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
	    onMouseMove, onMouseDown, onMouseUp, onRightClick, onMouseOut
	}
}

export default useBoard
