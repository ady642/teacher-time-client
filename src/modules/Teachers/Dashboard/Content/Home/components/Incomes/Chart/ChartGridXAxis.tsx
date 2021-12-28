import {FunctionComponent} from "react";
import styles from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/incomesStyles.module.scss";
import useDates from "@/common/hooks/useDates";
import {Dayjs} from "dayjs";

interface ChartGridXAxisProps {

}

const ChartGridXAxis: FunctionComponent<ChartGridXAxisProps> = () => {
	const { getMonths } = useDates()

	const periods = {
		months: getMonths()
	}

	return <div className={styles['incomes__chart__grid__x-axis']}>
		{
			periods.months.map((period: Dayjs, index: number) => <div key={index} className={styles['incomes__chart__grid__x-vl']} />)
		}
	</div>
}

export default ChartGridXAxis
