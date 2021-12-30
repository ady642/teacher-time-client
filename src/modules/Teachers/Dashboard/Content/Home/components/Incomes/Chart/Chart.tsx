import {FunctionComponent} from "react";
import styles from '@/modules/Teachers/Dashboard/Content/Home/components/Incomes/incomesStyles.module.scss';
import ChartGrid from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/ChartGrid";

export interface StatIncome {
	dayIncomes: number,
	date: Date
}

interface ChartContainerProps {
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
	</div>
}

export default Chart
