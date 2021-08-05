import {FunctionComponent} from "react";
import styles from "@/modules/Payment/components/payment.module.scss";
import SquareHeader from "@/modules/Payment/components/LeftColumns/Square/SquareHeader";
import SquareList from "@/modules/Payment/components/LeftColumns/Square/SquareList";

interface SquareProps {

}

const Square: FunctionComponent<SquareProps> = () => {
	return <section className={styles['payment__aside-information__square']}>
		<SquareHeader />
		<SquareList />
	</section>
}

export default Square
