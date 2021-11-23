import {FunctionComponent} from "react";
import dynamic from "next/dynamic";
import styles from '@/modules/Landing/homeStyles.module.scss'

const ThreeComponent = dynamic(() => import('@/modules/Landing/ChooseBetweenTeacherAndStudent/ThreeComponent'), {
	ssr: false
})


interface threeProps {

}

const Three: FunctionComponent<threeProps> = () => {
	return <div className={styles['landing__container']}>
		<header className={styles['landing__header']}>My Header</header>
		<section className={styles['landing__content']}>
			<div className={styles['landing_left']}>
				<div>
					Aides des élèves
				</div>
			</div>
			<ThreeComponent />
		</section>
	</div>
}

export default Three
