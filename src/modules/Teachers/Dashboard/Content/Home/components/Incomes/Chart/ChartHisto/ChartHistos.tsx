import {FunctionComponent, MutableRefObject } from "react";
import styles from './chartHistoStyles.module.scss'
import {StatIncome} from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/Chart";
import ChartHisto from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/ChartHisto/ChartHisto";
import useDates from "@/common/hooks/useDates";

interface ChartHistosProps {
	stats: StatIncome[],
	vLRefs: MutableRefObject<HTMLDivElement>[],
	xAxisRef: MutableRefObject<HTMLDivElement>,
	chartContainerRef: MutableRefObject<HTMLDivElement>
}

const ChartHistos: FunctionComponent<ChartHistosProps> = (props) => {
	const { stats, vLRefs, xAxisRef, chartContainerRef } = props

	const { getCurrentDate } = useDates()

	return <div className={styles['chart-histo__container']}>
		{ stats.map((stat, index) => <ChartHisto
			key={index}
			stat={stat}
			currentDate={getCurrentDate()}
			vLRefs={vLRefs}
			chartContainerRef={chartContainerRef}
			xAxisRef={xAxisRef}
		/>) }
	</div>
}

export default ChartHistos
