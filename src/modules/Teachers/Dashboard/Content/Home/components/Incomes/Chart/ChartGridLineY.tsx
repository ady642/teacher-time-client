import {FunctionComponent, MutableRefObject} from "react";
import styles from '@/modules/Teachers/Dashboard/Content/Home/components/Incomes/incomesStyles.module.scss'

interface ChartGridLineYProps {
    value: number,
	yAxisMaxRef?: MutableRefObject<HTMLDivElement>
}

const ChartGridLineY: FunctionComponent<ChartGridLineYProps> = ({ value, yAxisMaxRef }) => {
	return <div ref={yAxisMaxRef} className={styles['incomes__chart__grid__line-y']}>
		<span className={styles['incomes__chart__grid__line-y__value']}>{ value } €</span>
		<hr className={styles['incomes__chart__grid__line-y__axis']} />
	</div>
}

export default ChartGridLineY
