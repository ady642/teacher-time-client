import {FunctionComponent} from "react";
import ChartGridLineY from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/ChartGridLineY";
import styles from '@/modules/Teachers/Dashboard/Content/Home/components/Incomes/incomesStyles.module.scss'
import ChartGridXAxis from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/ChartGridXAxis";

interface ChartGridProps {
	maxValue: number
}

const ChartGrid: FunctionComponent<ChartGridProps> = ({ maxValue }) => {
	return <div className={styles['incomes__chart__grid']}>
		<ChartGridLineY value={maxValue} />
		<ChartGridLineY value={maxValue * 0.75} />
		<ChartGridLineY value={maxValue * 0.50} />
		<ChartGridLineY value={maxValue * 0.25} />
		<ChartGridXAxis />
	</div>
}

export default ChartGrid
