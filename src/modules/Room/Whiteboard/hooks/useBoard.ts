import {MutableRefObject, useEffect, useState, useRef} from "react";
import ChalkParams from "@/modules/Room/Whiteboard/interfaces/ChalkParams";
import TextBoxParams from "@/modules/Room/Whiteboard/interfaces/TextBoxParams";
import {SocketData} from "@/modules/Room/Whiteboard/types/SocketData";
import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";
import useMouseEvents from "@/modules/Room/Whiteboard/hooks/useMouseEvents";
import Point from "@/modules/Room/Whiteboard/interfaces/Point";
import {Socket} from "socket.io-client";
import {linearCurve} from "@/modules/Room/Whiteboard/utils/calculs/linearCurve";

type emissionPayload = {
	A: Point;
	B: Point;
	chalkParams: Omit<ChalkParams, 'x' | 'y'>;
	roomID: string
}

const useBoard = (boardContainerRef: MutableRefObject<HTMLDivElement>, canvasRef: MutableRefObject<HTMLCanvasElement>, tool: ToolInterface, roomID: string, textBoxRef: MutableRefObject<HTMLTextAreaElement>, socket: Socket) => {
	const [drawing, setDrawing] = useState(false)
	const [chalkParams, setChalkParams] = useState<ChalkParams>({ width: tool.width, color: tool.color, x: 0, y: 0})
	const [textBoxParams, setTextBoxParams] = useState<TextBoxParams>({ size: tool.width, color: tool.color, x: 0, y: 0, cpt:false})
	const pointsRef: MutableRefObject<Point[]>  = useRef<Point[]>([])
	const [rightClickActivated, setRightClickActivated] = useState(false)


	const clearPoints = () => {
		pointsRef.current = []
	}

	const clearCanvas = () => {
		const context = canvasRef.current.getContext('2d');
		context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
		clearPoints()
	}

	/*	const plotPoints = () => {
		const canvas = canvasRef.current
		const context = canvas.getContext('2d')

		linearCurve(context)
	}*/

	const emitPoints = ({ A, B, chalkParams, roomID }: emissionPayload) => {
		const canvas = canvasRef.current
		let w = canvas.offsetWidth;
		let h = canvas.offsetHeight;

		socket.emit('drawing', { x0: A.x / w, y0: A.y / h, x1: B.x / w, y1: B.y / h, color: chalkParams.color, width: chalkParams.width, roomID});
	}

	const inputSetCoords = (x0: number, y0: number) => {
		const textArea = textBoxRef.current;
		textArea.style.left = ( (x0 - 2) + "px" );
		textArea.style.top = ( (y0 - 15) + "px" );
		textArea.style.display="block"
	}

	const fillTextBox = (x0: number, y0: number, color: string, size:number, text:string, cpt:boolean) => {
		const canvas = canvasRef.current

		const context = canvas.getContext('2d')
		context.font = "21px Arial";

		const textInBox = textBoxRef.current

		const lineheight = 25;
		const lines = textInBox.value.split('\n');

		for (let i = 0; i<lines.length; i++){
			context.fillText(lines[i], parseInt(textInBox.style.left) ,parseInt(textInBox.style.top)+ (i*lineheight)+ 25 );
		}

		// Emit values to fill text
		socket.emit('fill-text', {text: textInBox.value, x: textInBox.style.left, y: textInBox.style.top, roomID});

		// Reset Text and hide textArea
		textInBox.value = null
		textInBox.style.display = "none"
	}

	const drawLine = (x0: number, y0: number, x1: number, y1: number, color: string, width: number, isEmitting = false) => {
		const canvas = canvasRef.current
		const context = canvas.getContext('2d')
		const rect = canvasRef.current.getBoundingClientRect();

		const offsetLeft = rect.left;
		const offsetTop = rect.top;

		context.strokeStyle = color;
		context.fillStyle = color;
		context.lineWidth = width;
		context.lineCap = 'round';

		pointsRef.current.push({x: x0 - offsetLeft, y: y0 - offsetTop});
		//plotPoints()

		const A = { x: x0 - offsetLeft, y: y0 - offsetTop }
		const B = { x: x1 - offsetLeft, y: y1 - offsetTop }

		linearCurve(context, A, B)

		if (isEmitting)
			emitPoints({
				A: { x: x0, y: y0 },
				B: { x: x1, y: y1 },
				chalkParams: { width, color },
				roomID
			})
	}

	const {onMouseUp, onMouseMove, onMouseDown, onMouseOut, onRightClick} = useMouseEvents(drawing,
		setDrawing, chalkParams,
		setChalkParams, drawLine,
		clearPoints, setRightClickActivated,
		rightClickActivated, textBoxParams,
		setTextBoxParams,tool, inputSetCoords,
		fillTextBox ,textBoxRef,
		roomID,
		socket
	)

	useEffect(() => {
		setChalkParams({ ...chalkParams, color: tool.color, width: tool.width })
	}, [tool.color, tool.width, tool.name])

	const onDrawingEvent = (data: SocketData): void => {
		const canvas = canvasRef.current
		let w = canvas.offsetWidth;
		let h = canvas.offsetHeight;

		drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color, data.width);
	}
	const onFillTextEvent = (data: {text: string , x: string, y:string, roomID:string}): void => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		const lines = data.text.split('\n');
		const lineheight = 25;

		for (let i = 0; i<lines.length; i++){
			context.fillText(lines[i], parseInt(data.x) ,parseInt(data.y)+ (i*lineheight)+ 25 );
		}
	}

	const onResize = () => {
		const canvas = canvasRef.current
		canvas.width = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;
	}

	useEffect(() => {
		socket.on('drawing', onDrawingEvent);
		socket.on('on-fill-text', onFillTextEvent);
		socket.on('on-clear-canvas', clearCanvas);
		socket.on('on-clear-points', clearPoints);
	}, [])

	useEffect(() => {
		window.addEventListener('resize', onResize, false);
		onResize()

		textBoxRef.current.style.display="none"

		return () => {
			window.removeEventListener('resize', onResize, false)
		}
	}, [])

	return {
	    onMouseMove, onMouseDown, onMouseUp, onRightClick, onMouseOut
	}
}

export default useBoard
