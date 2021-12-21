import {FunctionComponent} from "react";
import styles from '@/modules/Teachers/Dashboard/Content/Home/components/Incomes/incomesStyles.module.scss'
import useTranslation from "@/common/hooks/useTranslation";
import PeriodSelector, {
	PeriodSelectorProps
} from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Bar/PeriodSelector";

interface BarProps extends PeriodSelectorProps{

}

const Bar: FunctionComponent<BarProps> = ({
	period,
	setPeriod
}) => {
	const { t } = useTranslation()

	return <div className={styles['incomes__bar']}>
		<h1 className={styles['incomes__bar__title']}>
			{ t('dashboard.home.incomes.title') }
		</h1>
		<PeriodSelector
			period={period}
			setPeriod={setPeriod}
		/>
	</div>
}

export default Bar
