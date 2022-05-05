import {FunctionComponent, MutableRefObject, useEffect, useRef, useState} from "react";
import styles
	from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/ChartHisto/chartHistoStyles.module.scss";
import {StatIncome} from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/Chart";
import Point from "@/modules/Room/Whiteboard/interfaces/Point";
import {Tooltip} from "@material-ui/core";
import {Periods} from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Bar/PeriodSelector";
import {yearsPeriod} from "@/common/hooks/useDates";

interface ChartHistoProps {
	max: number,
	stat: StatIncome,
	currentDate: number,
	vLRefs: MutableRefObject<HTMLDivElement>[],
	chartContainerRef: MutableRefObject<HTMLDivElement>,
	xAxisRef: MutableRefObject<HTMLDivElement>,
	yAxisMaxRef: MutableRefObject<HTMLDivElement>,
	period: Periods
}

const ChartHisto: FunctionComponent<ChartHistoProps> = (props) => {
	const { stat,
		chartContainerRef, vLRefs, xAxisRef, yAxisMaxRef, max, period } = props

	const [position, setPosition] = useState<Point>({ x: 0, y: 0 });
	const [height, setHeight] = useState(0)
	const histoBarRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		setHeight(findHeight())
	}, [max])

	useEffect(() => {
		setHeight(findHeight())
		setPosition(findVlPosition())
	}, [stat])

	useEffect(() => {
		setHeight(findHeight())
		setPosition(findVlPosition())

		window.addEventListener('resize', () => {
			setPosition(findVlPosition())
			setHeight(findHeight())
		})

		return () => {
			window.removeEventListener('resize', () => {
				console.log('remove resize event')
			})
		}
	}, [])

	const findHeight = (): number => {
		const clientXAxis = xAxisRef.current.getBoundingClientRect()
		const clientYAxisMax = yAxisMaxRef.current.getBoundingClientRect()

		const heightMax = clientXAxis.y - clientYAxisMax.y - 10

		return heightMax * (stat.incomes / max)
	}

	const findVlPosition = (): Point => {
		const vls = vLRefs

		if(vls.length === 0 || !vls) {

			return {
				x: 0,
				y: 0
			}
		}

		let clientRectsVl: DOMRect

		if(period === Periods.Month) {
			clientRectsVl = vls[stat.date.month - 1]?.current.getBoundingClientRect()
		} else if (period === Periods.Year) {
			clientRectsVl = vls[stat.date.year + yearsPeriod - 2022 - 1]?.current.getBoundingClientRect()
		}

		const clientRectsChartContainer = chartContainerRef.current.getBoundingClientRect()
		const clientXAxis = xAxisRef.current.getBoundingClientRect()

		const clientHistoBar = histoBarRef.current.getBoundingClientRect()

		const paddingTopContainer = Number(getComputedStyle(chartContainerRef.current).paddingTop.split('px')[0])

		return {
			x: clientRectsVl.x - clientRectsChartContainer.x - clientHistoBar.width / 2,
			y: clientXAxis.height + paddingTopContainer
		}
	}

	return <Tooltip placement={"left-start"} title={`${stat.incomes / 100} €`}>
		<div
			ref={histoBarRef}
			className={styles['chart-histo__bar']}
			style={{
				left: position.x,
				bottom: position.y,
				height
			}}
		/>
	</Tooltip>
}

export default ChartHisto
