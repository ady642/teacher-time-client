import {FunctionComponent, MutableRefObject, useEffect, useState} from "react";
import styles from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/incomesStyles.module.scss";
import useDates from "@/common/hooks/useDates";
import {Dayjs} from "dayjs";
import {Periods} from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Bar/PeriodSelector";

interface ChartGridXAxisProps {
	vLRefs: MutableRefObject<HTMLDivElement>[],
	period: Periods,
	xAxisRef: MutableRefObject<HTMLDivElement>
}

const ChartGridXAxis: FunctionComponent<ChartGridXAxisProps> = (props) => {
	const { vLRefs, period, xAxisRef } = props

	const [format, setFormat] = useState('MMM')

	const { getMonths, getYears } = useDates()

	useEffect(() => {
		switch(period) {
		case Periods.Month:
			setFormat('MMM')
			break;
		case Periods.Year:
			setFormat('YYYY')
			break;
		}
	}, [period])

	const periods: Record<Periods, Dayjs[]> = {
		[Periods.Year]: getYears(),
		[Periods.Month]: getMonths(),
		[Periods.Week]: [],
		[Periods.Day]: []
	}

	console.log(getYears())

	return <div ref={xAxisRef} className={styles['incomes__chart__grid__x-axis']}>
		{
			periods[period].map((period: Dayjs, index: number) => <div className={styles['incomes__chart__grid__x-unit']} key={index}>
				<div ref={vLRefs[index]} className={styles['incomes__chart__grid__x-vl']} />
				<div className={styles['incomes__chart__grid__x-month']}>{ period.format(format) }</div>
			</div>
			)
		}
	</div>
}

export default ChartGridXAxis
