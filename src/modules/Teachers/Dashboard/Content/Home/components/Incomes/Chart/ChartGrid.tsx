import {FunctionComponent, MutableRefObject} from "react";
import ChartGridLineY from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/ChartGridLineY";
import styles from '@/modules/Teachers/Dashboard/Content/Home/components/Incomes/incomesStyles.module.scss'
import ChartGridXAxis from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/ChartGridXAxis";
import {Periods} from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Bar/PeriodSelector";

interface ChartGridProps {
	maxValue: number,
	vLRefs: MutableRefObject<HTMLDivElement>[],
	period: Periods,
	xAxisRef: MutableRefObject<HTMLDivElement>
}

const ChartGrid: FunctionComponent<ChartGridProps> = (props) => {
	const { maxValue, vLRefs, period, xAxisRef } = props

	return <div className={styles['incomes__chart__grid']}>
		<ChartGridLineY value={maxValue} />
		<ChartGridLineY value={maxValue * 0.75} />
		<ChartGridLineY value={maxValue * 0.50} />
		<ChartGridLineY value={maxValue * 0.25} />
		<ChartGridXAxis xAxisRef={xAxisRef} vLRefs={vLRefs} period={period} />
	</div>
}

export default ChartGrid
