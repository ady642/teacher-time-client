import {FunctionComponent} from "react";
import styles from './chartHistoStyles.module.scss'
import {StatIncome} from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/Chart";

interface ChartHistosProps {
	stats: StatIncome[],
}

const ChartHistos: FunctionComponent<ChartHistosProps> = ({ stats }) => {
	return <div className={styles['chart-histo__container']}>
		{ stats.map((stat, index) => <div key={index} className={styles['chart-histo__bar']}/>) }
	</div>
}

export default ChartHistos
