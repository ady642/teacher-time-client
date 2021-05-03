import {FunctionComponent, useEffect} from "react";
import styles from './style.module.css'

interface BoardProps {
	socket: any
}

const Board: FunctionComponent<BoardProps> = ({ socket }) => {
	const drawOnCanvas = () => {
		let canvas: any = document.querySelector('#board');
		let colors = document.getElementsByClassName('color');
		let context = canvas.getContext('2d');

		let current = {
			color: 'red',
			x: 0,
			y: 0
		};
		let drawing = false;

		canvas.addEventListener('mousedown', onMouseDown, false);
		canvas.addEventListener('mouseup', onMouseUp, false);
		canvas.addEventListener('mouseout', onMouseUp, false);
		canvas.addEventListener('mousemove', throttle(onMouseMove, 10), false);

		//Touch support for mobile devices
		canvas.addEventListener('touchstart', onMouseDown, false);
		canvas.addEventListener('touchend', onMouseUp, false);
		canvas.addEventListener('touchcancel', onMouseUp, false);
		canvas.addEventListener('touchmove', throttle(onMouseMove, 10), false);

		for (let i = 0; i < colors.length; i++){
			colors[i].addEventListener('click', onColorUpdate, false);
		}

		socket.on('drawing', onDrawingEvent);

		window.addEventListener('resize', onResize, false);
		onResize();


		function drawLine(x0: number, y0: number, x1: number, y1: number, color: string, isEmitting = false){
			context.beginPath();
			context.moveTo(x0, y0);
			context.lineTo(x1, y1);
			context.strokeStyle = color;
			context.lineWidth = 5;
			context.stroke();
			context.closePath();

			if (!isEmitting) { return; }
			let w = canvas.width;
			let h = canvas.height;

			socket.emit('drawing', {
				x0: x0 / w,
				y0: y0  / h,
				x1: x1 / w,
				y1: y1 / h,
				color: color
			});
		}

		function onMouseDown(e: any){
			drawing = true;
			current.x = e.clientX||e.touches[0].clientX;
			current.y = e.clientY||e.touches[0].clientY;
		}

		function onMouseUp(e: any){
			if (!drawing) { return; }
			drawing = false;
			drawLine(current.x, current.y, e.clientX||e.touches[0].clientX, e.clientY||e.touches[0].clientY, current.color, true);
		}

		function onMouseMove(e: any){
			if (!drawing) { return; }
			drawLine(current.x, current.y, e.clientX||e.touches[0].clientX, e.clientY||e.touches[0].clientY, current.color, true);
			current.x = e.clientX||e.touches[0].clientX;
			current.y = e.clientY||e.touches[0].clientY;
		}

		function onColorUpdate(e: any){
			current.color = e.target.className.split(' ')[1];
		}

		// limit the number of events per second
		function throttle(callback: any, delay: number) {
			let previousCall = new Date().getTime();
			return function() {
				let time = new Date().getTime();

				if ((time - previousCall) >= delay) {
					previousCall = time;
					callback.apply(null, arguments);
				}
			};
		}

		function onDrawingEvent(data: any){
			let w = canvas.width;
			let h = canvas.height;
			drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color);
		}

		// make the canvas fill its parent
		function onResize() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}
	}

	useEffect(() => {
		drawOnCanvas()
	}, [])

	return <div id='sketch' className={styles.sketch}>
		<canvas className={styles.board} id="board"/>
	</div>
}

export default Board
