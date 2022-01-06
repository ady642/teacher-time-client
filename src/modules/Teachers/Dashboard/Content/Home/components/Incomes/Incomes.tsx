import {FunctionComponent} from "react";
import styles from './incomesStyles.module.scss';
import Bar from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Bar/Bar";
import {Period} from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Bar/PeriodSelector";
import Chart, {StatIncome} from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/Chart";

interface IncomesProps {
	statsIncome: StatIncome[],
	period: Period,
	setPeriod: (period: Period) => void,
	setStartDate: (startDate: string) => void,
}

const Incomes: FunctionComponent<IncomesProps> = (props) => {
	const { statsIncome, period, setPeriod, setStartDate } = props

	return <div className={styles['incomes__container']}>
		<Bar
			period={period}
			setPeriod={setPeriod}
			setStartDate={setStartDate}
		/>
		<Chart
			stats={statsIncome}
			period={period.value}
		/>
	</div>
}

export default Incomes
