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
	const { getStats } = useTeacherClient()
	const [stats, setStats] = useState({ totalDuration: 0, totalHelped: 0})
	const { goTo } = useRoutePush()

	const getTeacherStats = async () => {
		try {
			const stats = await getStats()

			console.log(stats)

			setStats(stats)
		} catch (e) {
			await goTo('home')
		}
	}

	useEffect(() => {
		(async() => await getTeacherStats())()
	}, [teacher])


	return <div className={styles.home}>
		<HomeTitle teacherName={teacher?.user?.firstName ?? 'Adrien'} />
		<div className={styles['home-content']}>
			<section>
				<Banner
					timeCount={stats.totalDuration}
					studentCount={stats.totalHelped}
				/>
				<Incomes />
			</section>
			<section>
				div
			</section>
		</div>
	</div>
}

export default Home
