import styles from "@/modules/home/styles/Home.module.scss"

const Draw1  = () => {
	return <img
		className={`${styles.draws__image}`}
		src={'/img/home/workingstudent.png'}
		alt={'Logo'}
	/>
}

export default Draw1
