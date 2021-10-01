import styles from '@/modules/home/styles/Home.module.scss'

const WorkingWoman = () => {
	return <img
		src={'/img/board.png'}
		className={styles['headBand__boardImage']}
		alt={'board'}
		width={800}
		height={600}
	/>
}

export default WorkingWoman
