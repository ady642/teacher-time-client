import {FunctionComponent} from "react";
import HomeTitle from "@/modules/Teachers/Dashboard/Content/Home/components/HomeTitle";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";
import styles from './viewsStyles.module.scss'
import Banner from "@/modules/Teachers/Dashboard/Content/Home/components/Banner/Banner";
import Incomes from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Incomes";

interface HomeProps {
	teacher: Teacher
}

const Home: FunctionComponent<HomeProps> = ({ teacher }) => {
	return <div className={styles.home}>
		<HomeTitle teacherName={teacher?.user?.firstName ?? 'Adrien'} />
		<div className={styles['home-content']}>
			<section className={'test'}>
				<Banner
					timeCount={180}
					studentCount={27}
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
