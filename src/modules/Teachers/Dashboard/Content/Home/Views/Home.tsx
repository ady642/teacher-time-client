import {FunctionComponent, useEffect, useState} from "react";
import HomeTitle from "@/modules/Teachers/Dashboard/Content/Home/components/HomeTitle";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";
import styles from './viewsStyles.module.scss'
import Banner from "@/modules/Teachers/Dashboard/Content/Home/components/Banner/Banner";
import Incomes from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Incomes";
import useTeacherClient from "@/modules/Teachers/services/useTeacherClient";
import useRoutePush from "@/common/hooks/useRoutePush";
import {Period, Periods} from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Bar/PeriodSelector";
import useDates from "@/common/hooks/useDates";

interface HomeProps {
	teacher: Teacher
}

const Home: FunctionComponent<HomeProps> = ({ teacher }) => {
	const { getFirstDayOfCurrentYear, getLastDayOfCurrentYear } = useDates()
	const { getStats, getStatsIncomes } = useTeacherClient()
	const [stats, setStats] = useState({ totalDuration: 0, totalHelped: 0})
	const [statsIncomes, setStatsIncomes] = useState([])
	const [period, setPeriod] = useState<Period>({ label: 'Mois', value: Periods.Month })
	const [startDate, setStartDate] = useState(getFirstDayOfCurrentYear())
	const [endDate, setEndDate] = useState(getLastDayOfCurrentYear())
	const { goTo } = useRoutePush()

	const getTeacherStats = async () => {
		const stats = await getStats()

		if(stats)
			setStats(stats)
	}

	const getTeacherStatIncomes = async () => {
		const statsIncomes = await getStatsIncomes({
			startDate,
			endDate,
			period: period.value
		})

		if(statsIncomes)
			setStatsIncomes(statsIncomes)
	}

	useEffect(() => {
		(async () => await getTeacherStatIncomes())()
	}, [period])

	useEffect(() => {
		(async() => {
			try {
				await Promise.all([
					await getTeacherStats(),
					await getTeacherStatIncomes()
				])
			} catch (e) {
				//await goTo('home')
			}
		}
		)()
	}, [teacher])


	return <div className={styles.home}>
		<HomeTitle teacherName={teacher?.user?.firstName ?? 'Adrien'} />
		<div className={styles['home-content']}>
			<section>
				<Banner
					timeCount={stats.totalDuration}
					studentCount={stats.totalHelped}
				/>
				<Incomes
					statsIncome={statsIncomes}
					period={period}
					setPeriod={setPeriod}
				/>
			</section>
			<section>
				div
			</section>
		</div>
	</div>
}

export default Home
