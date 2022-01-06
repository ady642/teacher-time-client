import {FunctionComponent, MutableRefObject } from "react";
import styles from './chartHistoStyles.module.scss'
import {StatIncome} from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/Chart";
import ChartHisto from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/ChartHisto/ChartHisto";
import useDates from "@/common/hooks/useDates";
import {Periods} from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Bar/PeriodSelector";

interface ChartHistosProps {
	max: number,
	stats: StatIncome[],
	vLRefs: MutableRefObject<HTMLDivElement>[],
	xAxisRef: MutableRefObject<HTMLDivElement>,
	chartContainerRef: MutableRefObject<HTMLDivElement>,
	yAxisMaxRef: MutableRefObject<HTMLDivElement>,
	period: Periods
}

const ChartHistos: FunctionComponent<ChartHistosProps> = (props) => {
	const { max, stats, vLRefs, xAxisRef, chartContainerRef, yAxisMaxRef, period } = props

	const { getCurrentDate } = useDates()

	return <div className={styles['chart-histo__container']}>
		{ stats.map((stat, index) => <ChartHisto
			period={period}
			key={index}
			max={max}
			stat={stat}
			currentDate={getCurrentDate()}
			vLRefs={vLRefs}
			chartContainerRef={chartContainerRef}
			xAxisRef={xAxisRef}
			yAxisMaxRef={yAxisMaxRef}
		/>) }
	</div>
}

export default ChartHistos
