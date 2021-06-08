import ChalkParams from "@/modules/Room/Whiteboard/interfaces/ChalkParams";
import TextBoxParams from "@/modules/Room/Whiteboard/interfaces/TextBoxParams";
import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";

const useMouseEvents = (
	drawing: boolean,
	setDrawing: (drawing: boolean) => void,
	chalkParams: ChalkParams,
	setChalkParams: (chalkParams: ChalkParams) => void,
	drawLine: (chalkX: number, chalkY: number, pageX: number, pageY: number, chalkColor: string, chalkWidth: number, isEmitting: boolean) => void,
	clearPoints: () => void,
	setRightClickActivated: (rightClickActivated: boolean) => void,
	rightClickActivated: boolean,
	textBoxParams: TextBoxParams,
	setTextBoxParams: (textBoxParams: TextBoxParams) => void,
	tool: ToolInterface,
	InputSetCoords: (pageX: number, pageY: number) => void,
	fillTextBox: (x0: number, y0: number,color: string, size:number,text:string, cpt:boolean) => void,
	textBoxRef: any
) => {

	const onMouseDown = (e: any) => {
		if((('button' in e ) && e.button !== 0) || ('touches' in e) && e.touches.length === 0) {
			return
		}

		if(tool.name == 'TextBox' && textBoxParams.cpt) {
			fillTextBox(0,0,"black",20,"rgdrg",true)
			setTextBoxParams({ ...textBoxParams, cpt: false })
			return

		}

		setTextBoxParams({
			...textBoxParams,
			x: e.pageX,
			y: e.pageY,

		})
		if(tool.name == 'TextBox' && !textBoxParams.cpt) {

			InputSetCoords(e.pageX, e.pageY);
			setTextBoxParams({...textBoxParams, cpt: true})
			textBoxRef.current.style.display = "block";

			console.log("cpt mis a", textBoxParams.cpt)
		}

		setRightClickActivated(false)
		setDrawing(true);
		setChalkParams({
			...chalkParams,
			x: e.pageX||e.touches[0].pageX,
			y: e.pageY||e.touches[0].pageY,
		})
	}

	const onMouseMove = (e: any): void => {
		if (!drawing || tool.name === 'TextBox') { return; }

		if((('button' in e ) && e.button === 0)) {
			setChalkParams({
				...chalkParams,
				x: e.pageX,
				y: e.pageY,
			})

			drawLine(chalkParams.x, chalkParams.y, e.pageX, e.pageY, chalkParams.color, chalkParams.width, true);
		}

		if( ('touches' in e) && e.touches.length !== 0) {
			setChalkParams({
				...chalkParams,
				x: e.touches[0].pageX,
				y: e.touches[0].pageY,
			})

			drawLine(chalkParams.x, chalkParams.y, e.touches[0].pageX, e.touches[0].pageY, chalkParams.color, chalkParams.width, true);
		}
	}

	const onMouseUp = (e: any) => {
		if((('button' in e ) && e.button !== 0) || ('touches' in e) && e.touches.length === 0 || tool.name == 'TextBox') {
			return
		}

		setChalkParams({
			...chalkParams,
			x: e.pageX||e.touches[0].pageX,
			y: e.pageY||e.touches[0].pageY,
		})

		if(!rightClickActivated && drawing) {
			drawLine(chalkParams.x, chalkParams.y, e.pageX||e.touches[0].pageX, e.pageY||e.touches[0].pageY, chalkParams.color, chalkParams.width, true);
		}
		setDrawing(false);
		clearPoints()
	}

	const onMouseOut = () => {
		setDrawing(false);
		clearPoints()
	}

	const onRightClick = () => {
		setRightClickActivated(true)
	}

	return {
		onMouseUp,
		onMouseDown,
		onMouseMove,
		onMouseOut,
		onRightClick
	}
}

export default useMouseEvents
