import {FunctionComponent, useState} from "react";
import Dropdown from "@/common/components/Dropdowns/Dropdown";
import styles from '@/modules/Teachers/Dashboard/Content/Home/components/Incomes/incomesStyles.module.scss'

export enum Periods {
    Day = 'day',
    Week = 'week',
    Month = 'month',
    Year = 'year'
}

export type Period = {
    label: string, value: Periods
}

export interface PeriodSelectorProps {
    period: Period,
    setPeriod: (period: Period) => void
}

const PeriodSelector: FunctionComponent<PeriodSelectorProps> = ({ period, setPeriod }) => {
	const [opened, setOpened] = useState(false)

	const values = [
		{ label: 'Jour', value: Periods.Day },
		{ label: 'Semaine', value: Periods.Week },
		{ label: 'Mois', value: Periods.Month },
		{ label: 'Année', value: Periods.Year },
	]

	return <Dropdown
		values={values}
		opened={opened}
		setOpened={setOpened}
		DDvalue={period}
		setValue={setPeriod}
		className={styles['incomes__bar__period-selector__container']}
	/>
}

export default PeriodSelector
