import {FunctionComponent, MutableRefObject, useRef} from "react";
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

	const findMax = (): number => {
		let max = stats[0]?.incomes

		stats.forEach(stat => {
			if(stat.incomes > max) {
				max = stat.incomes
			}
		})

		return max
	}

	return <div className={styles['incomes__chart__container']}>
		<ChartGrid
			maxValue={findMax()}
			vLRefs={vLRefs}
			period={period}
			xAxisRef={xAxisRef}
		/>
		<ChartHistos
			stats={stats}
			vLRefs={vLRefs}
			xAxisRef={xAxisRef}
		/>
	</div>
}

export default Chart
