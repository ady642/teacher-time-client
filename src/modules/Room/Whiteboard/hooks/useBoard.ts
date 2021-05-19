import {MutableRefObject, useEffect, useState} from "react";
import ChalkParams from "@/modules/Room/Whiteboard/interfaces/ChalkParams";
import {socket} from "@/common/utils/client";
import {SocketData} from "@/modules/Room/Whiteboard/types/SocketData";
import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";

const useBoard = (boardContainerRef: MutableRefObject<HTMLDivElement>, canvasRef: MutableRefObject<HTMLCanvasElement>, tool: ToolInterface) => {
	const [drawing, setDrawing] = useState(false)
	const [chalkParams, setChalkParams] = useState<ChalkParams>({ width: tool.width ,color: tool.color, x: 0, y: 0})

	useEffect(() => {
		setChalkParams({ ...chalkParams, color: tool.color})
	}, [tool.color])

	const onMouseUp = (e: any) => {
		setDrawing(false);
		drawLine(chalkParams.x, chalkParams.y, e.pageX||e.touches[0].pageX, e.pageY||e.touches[0].pageY, chalkParams.color, chalkParams.width, true);
	}

	const onMouseDown = (e: any) => {
		setDrawing(true);
		setChalkParams({
			...chalkParams,
			x: e.pageX||e.touches[0].pageX,
			y: e.pageY||e.touches[0].pageY,
		})
	}

	const onMouseMove = (e: any): void => {
		if (!drawing) { return; }
		drawLine(chalkParams.x, chalkParams.y, e.pageX||e.touches[0].pageX, e.pageY||e.touches[0].pageY, chalkParams.color, chalkParams.width, true);
		setChalkParams({
			...chalkParams,
			x: e.pageX||e.touches[0].pageX,
			y: e.pageY||e.touches[0].pageY,
		})
	}

	const drawLine = (x0: number, y0: number, x1: number, y1: number, color: string, width: number, isEmitting = false) => {
		const canvas = canvasRef.current
		const context = canvas.getContext('2d')
		const rect = canvas.getBoundingClientRect();
		const offsetLeft = rect.left;
		const offsetTop = rect.top;

		context.beginPath();
		context.moveTo(x0 - offsetLeft, y0 - offsetTop); // 12 is for the borderWidth
		context.lineTo(x1 - offsetLeft, y1 - offsetTop);
		context.strokeStyle = color;
		context.lineWidth = width;
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
			color,
			width
		});
	}

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
	    onMouseMove,
		onMouseDown,
		onMouseUp,
	}
}

export default useBoard
