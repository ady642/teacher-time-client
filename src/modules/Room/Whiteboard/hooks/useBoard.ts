import {MutableRefObject, useEffect, useRef, useState} from "react";
import ChalkParams from "@/modules/Room/Whiteboard/interfaces/ChalkParams";
import {socket} from "@/common/utils/client";
import {SocketData} from "@/modules/Room/Whiteboard/types/SocketData";
import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";
import useTouchEvents from '@/modules/Room/Whiteboard/hooks/useTouchEvents';
import useMouseEvents from "@/modules/Room/Whiteboard/hooks/useMouseEvents";

const useBoard = (boardContainerRef: MutableRefObject<HTMLDivElement>, canvasRef: MutableRefObject<HTMLCanvasElement>, tool: ToolInterface) => {
	const [drawing, setDrawing] = useState(false)
	const [chalkParams, setChalkParams] = useState<ChalkParams>({ width: tool.width, color: tool.color, x: 0, y: 0})

	useEffect(() => {

	}, )

	const drawLine = (x0: number, y0: number, x1: number, y1: number, color: string, width: number, isEmitting = false) => {
		if(drawing === false) {
			return
		}

		const canvas = canvasRef.current
		const context = canvas.getContext('2d')
		const rect = canvasRef.current.getBoundingClientRect();

		const offsetLeft = rect.left;
		const offsetTop = rect.top;

		context.strokeStyle = color;
		context.lineWidth = width;
		context.lineCap = 'round';

		context.beginPath();
		context.moveTo(x0 - offsetLeft, y0 - offsetTop);
		context.lineTo(x1 - offsetLeft, y1 - offsetTop);
		context.stroke();
		context.closePath();

		if (!isEmitting) { return; }
		let w = canvas.offsetWidth;
		let h = canvas.offsetHeight;

		socket.emit('drawing', { x0: x0 / w, y0: y0 / h, x1: x1 / w, y1: y1 / h, color, width});
	}

	const {onTouchStart, onTouchMove, onTouchEnd} = useTouchEvents(drawing, setDrawing, chalkParams, setChalkParams, drawLine)
	const {onMouseUp, onMouseMove, onMouseDown,} = useMouseEvents(drawing, setDrawing, chalkParams, setChalkParams, drawLine, canvasRef)

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
