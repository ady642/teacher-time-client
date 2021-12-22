import {FunctionComponent} from "react";
import styles from '@/modules/Teachers/Dashboard/Content/Home/components/Incomes/incomesStyles.module.scss'

interface ChartGridLineYProps {
    value: number
}

const ChartGridLineY: FunctionComponent<ChartGridLineYProps> = ({ value }) => {
	return <div className={styles['incomes__chart__grid__line-y']}>
		<span className={styles['incomes__chart__grid__line-y__value']} >{ value }</span>
		<div className={styles['incomes__chart__grid__line-y__axis']} />
	</div>
}

export default ChartGridLineY
