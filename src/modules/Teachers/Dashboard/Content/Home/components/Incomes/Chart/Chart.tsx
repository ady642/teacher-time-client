import {FunctionComponent} from "react";
import styles from '@/modules/Teachers/Dashboard/Content/Home/components/Incomes/incomesStyles.module.scss';
import ChartGrid from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/ChartGrid";
import ChartHistos from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/ChartHisto/ChartHistos";

export interface StatIncome {
	dayIncomes: number,
	date: Date
}

export interface ChartContainerProps {
	stats: StatIncome[],
}

const Chart: FunctionComponent<ChartContainerProps> = ({ stats }) => {
	const findMax = (): number => {
		let max = stats[0]?.dayIncomes

		stats.forEach(stat => {
			if(stat.dayIncomes > max) {
				max = stat.dayIncomes
			}
		})

		return max
	}

	return <div className={styles['incomes__chart__container']}>
		<ChartGrid
			maxValue={findMax()}
		/>
		<ChartHistos
			stats={stats}
		/>
	</div>
}

export default Chart
