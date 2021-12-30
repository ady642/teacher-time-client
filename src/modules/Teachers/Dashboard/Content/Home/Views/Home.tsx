import {FunctionComponent, useEffect, useState} from "react";
import HomeTitle from "@/modules/Teachers/Dashboard/Content/Home/components/HomeTitle";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";
import styles from './viewsStyles.module.scss'
import Banner from "@/modules/Teachers/Dashboard/Content/Home/components/Banner/Banner";
import Incomes from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Incomes";
import useTeacherClient from "@/modules/Teachers/services/useTeacherClient";
import useRoutePush from "@/common/hooks/useRoutePush";

interface HomeProps {
	teacher: Teacher
}

const Home: FunctionComponent<HomeProps> = ({ teacher }) => {
	const { getStats, getStatsIncomes } = useTeacherClient()
	const [stats, setStats] = useState({ totalDuration: 0, totalHelped: 0})
	const [statsIncomes, setStatsIncomes] = useState([])
	const { goTo } = useRoutePush()

	const getTeacherStats = async () => {
		try {
			const stats = await getStats()

			setStats(stats)
		} catch (e) {
			await goTo('home')
		}
	}

	const getTeacherStatIncomes = async () => {
		const stats = await getStatsIncomes()

		setStatsIncomes(stats)
	}

	useEffect(() => {
		(async() => {
			await Promise.all([await getTeacherStats(), await getTeacherStatIncomes()])
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
				/>
			</section>
			<section>
				div
			</section>
		</div>
	</div>
}

export default Home
