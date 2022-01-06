import {FunctionComponent, useEffect, useRef, useState} from "react";
import styles from '@/modules/Teachers/Dashboard/Content/Home/components/Incomes/incomesStyles.module.scss';
import ChartGrid from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/ChartGrid";
import ChartHistos from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/ChartHisto/ChartHistos";
import {Periods} from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Bar/PeriodSelector";

export interface StatIncome {
	incomes: number,
	date: {
		year: number,
		month: number,
		week: number,
	}
}

export interface ChartContainerProps {
	stats: StatIncome[],
	period: Periods
}

const Chart: FunctionComponent<ChartContainerProps> = ({ stats, period }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const vLRefs =[ ...Array(12).keys() ].map(() => useRef<HTMLDivElement>(null));
	const xAxisRef = useRef<HTMLDivElement>(null)
	const chartContainerRef = useRef<HTMLDivElement>(null)
	const yAxisMaxRef = useRef<HTMLDivElement>(null)
	const [maxIncomes, setMax] = useState(0)

	const findMax = (): number => {
		if(!stats) {
			return
		}

		let result = stats[0]?.incomes

		stats.forEach(stat => {
			if(stat.incomes > result) {
				result = stat.incomes
			}
		})

		return result
	}

	useEffect(() => {
		setMax(findMax())
	}, [stats])

	return <div ref={chartContainerRef} className={styles['incomes__chart__container']}>
		<ChartGrid
			maxValue={maxIncomes}
			vLRefs={vLRefs}
			period={period}
			xAxisRef={xAxisRef}
			yAxisMaxRef={yAxisMaxRef}
		/>
		{ stats && <ChartHistos
			max={maxIncomes}
			stats={stats}
			period={period}
			vLRefs={vLRefs}
			xAxisRef={xAxisRef}
			chartContainerRef={chartContainerRef}
			yAxisMaxRef={yAxisMaxRef}
		/> }
	</div>
}

export default Chart
