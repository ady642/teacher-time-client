import {FunctionComponent} from "react";
import styles from "@/modules/Payment/components/payment.module.scss";

interface TitlesProps {

}

const Titles: FunctionComponent<TitlesProps> = () => {
	return <div className="mt-4">
		<h1 className={styles['payment__aside-information__title']}>
            Lorem ipsum dolor sit
            amet, consectetur adipis
		</h1>
		<h2 className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a nulla est. Donec accumsan, erat sed bibendum pretium,
            odio libero mattis nibh, in suscipit elit
		</h2>
	</div>
}

export default Titles
