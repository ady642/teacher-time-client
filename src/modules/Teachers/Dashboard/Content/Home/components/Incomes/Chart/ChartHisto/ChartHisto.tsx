import {FunctionComponent, MutableRefObject, useEffect, useRef, useState} from "react";
import styles
	from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/ChartHisto/chartHistoStyles.module.scss";
import {StatIncome} from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/Chart";
import Point from "@/modules/Room/Whiteboard/interfaces/Point";

interface ChartHistoProps {
    stat: StatIncome,
	currentDate: number,
	vLRefs: MutableRefObject<HTMLDivElement>[],
	chartContainerRef: MutableRefObject<HTMLDivElement>,
	xAxisRef: MutableRefObject<HTMLDivElement>,
}

const ChartHisto: FunctionComponent<ChartHistoProps> = ({ stat,
	chartContainerRef, vLRefs, xAxisRef }) => {
	const [position, setPosition] = useState<Point>({ x: 0, y: 0 });
	const histoBarRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		console.log(stat)
		setPosition(findVlPosition())

		window.addEventListener('resize', () => {
			setPosition(findVlPosition())
		})

		return () => {
			window.removeEventListener('resize', () => {
				console.log('remove event')
			})
		}
	}, [])

	const findVlPosition = (): Point => {
		const vls = vLRefs

		if(vls.length === 0 || !vls) {

			return {
				x: 0,
				y: 0
			}
		}

		const clientRectsVl = vls[stat.date.month - 1]?.current.getBoundingClientRect()

		const clientRectsChartContainer = chartContainerRef.current.getBoundingClientRect()
		const clientXAxis = xAxisRef.current.getBoundingClientRect()

		const clientHistoBar = histoBarRef.current.getBoundingClientRect()

		const paddingTopContainer = Number(getComputedStyle(chartContainerRef.current).paddingTop.split('px')[0])

		return {
			x: clientRectsVl.x - clientRectsChartContainer.x - clientHistoBar.width / 2,
			y: clientXAxis.height + paddingTopContainer
		}
	}

	return <div
		ref={histoBarRef}
		className={styles['chart-histo__bar']}
		style={{
			left: position.x,
			bottom: position.y
		}}
	/>
}

export default ChartHisto
