import styles from "@/modules/home/styles/Home.module.scss"
import {FunctionComponent} from "react";

interface DrawProps {
	src: string
}

const Draw: FunctionComponent<DrawProps> = ({ src }) => <img
	className={`${styles.draws__image}`}
	src={src}
	alt={'draw'}
/>

export default Draw
