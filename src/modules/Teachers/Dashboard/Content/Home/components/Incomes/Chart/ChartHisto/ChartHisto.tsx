import {FunctionComponent, MutableRefObject, useEffect, useState} from "react";
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

	useEffect(() => {
		setPosition(findVlPosition)
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

		console.log(vls[stat.date.month - 1]?.current.getBoundingClientRect())

		const clientRectsChartContainer = chartContainerRef.current.getBoundingClientRect()
		const clientXAxis = xAxisRef.current.getBoundingClientRect()

		const heightVl =  clientRectsVl.top - clientRectsVl.bottom;

		console.log(heightVl)

		const position = {
			x: clientRectsVl.x - clientRectsChartContainer.x - clientRectsVl.height,
			y: clientXAxis.y - clientRectsChartContainer.y + clientXAxis.height - heightVl
		}

		return position
	}

	return <div
		className={styles['chart-histo__bar']}
		style={{
			left: position.x,
			bottom: position.y
		}}
	/>
}

export default ChartHisto
