import {FunctionComponent, MutableRefObject, useMemo} from "react";
import ChartGridLineY from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/ChartGridLineY";
import styles from '@/modules/Teachers/Dashboard/Content/Home/components/Incomes/incomesStyles.module.scss'
import ChartGridXAxis from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/ChartGridXAxis";
import {Periods} from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Bar/PeriodSelector";
import useMaths from "@/common/hooks/useMaths";

interface ChartGridProps {
	maxValue: number,
	vLRefs: MutableRefObject<HTMLDivElement>[],
	period: Periods,
	xAxisRef: MutableRefObject<HTMLDivElement>,
	yAxisMaxRef: MutableRefObject<HTMLDivElement>
}

const ChartGrid: FunctionComponent<ChartGridProps> = (props) => {
	const { maxValue, vLRefs, period, xAxisRef, yAxisMaxRef } = props
	const { round } = useMaths()

	const maxValueInEuros = useMemo(() => round(maxValue / 100, 2), [maxValue]);
	const maxValueInEuros3quarters = useMemo(() => round(maxValueInEuros * 0.75, 2), [maxValueInEuros]);
	const maxValueInEuros2quarters = useMemo(() => round(maxValueInEuros * 0.5, 2), [maxValueInEuros]);
	const maxValueInEuros1quarters = useMemo(() => round(maxValueInEuros * 0.25, 2), [maxValueInEuros]);

	return <div className={styles['incomes__chart__grid']}>
		<ChartGridLineY yAxisMaxRef={yAxisMaxRef} value={maxValueInEuros} />
		<ChartGridLineY value={maxValueInEuros3quarters} />
		<ChartGridLineY value={maxValueInEuros2quarters} />
		<ChartGridLineY value={maxValueInEuros1quarters} />
		<ChartGridXAxis xAxisRef={xAxisRef} vLRefs={vLRefs} period={period} />
	</div>
}

export default ChartGrid
