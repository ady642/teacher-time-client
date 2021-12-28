import {FunctionComponent} from "react";
import styles from '@/modules/Teachers/Dashboard/Content/Home/components/Incomes/incomesStyles.module.scss';
import ChartGrid from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/ChartGrid";

export interface StatIncome {
	dayIncome: number,
	date: Date
}

interface ChartContainerProps {
	stats: StatIncome[]
}

const Chart: FunctionComponent<ChartContainerProps> = ({ stats }) => {
	const findMax = (): number => {
		let max = 1

		stats.forEach(stat => {
			if(stat.dayIncome > max) {
				max = stat.dayIncome
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
