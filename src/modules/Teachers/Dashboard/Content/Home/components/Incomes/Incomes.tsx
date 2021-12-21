import {FunctionComponent, useState} from "react";
import styles from './incomesStyles.module.scss'
import Bar from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Bar/Bar";
import {Period, Periods} from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Bar/PeriodSelector";
import Chart from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/Chart";

interface IncomesProps {

}

const Incomes: FunctionComponent<IncomesProps> = () => {
	const [period, setPeriod] = useState<Period>({ label: 'Mois', value: Periods.Month })

	return <div className={styles['incomes__container']}>
		<Bar
			period={period}
			setPeriod={setPeriod}
		/>
		<Chart />
	</div>
}

export default Incomes
