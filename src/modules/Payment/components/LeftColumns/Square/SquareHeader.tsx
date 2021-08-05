import {FunctionComponent} from "react";
import styles from "@/modules/Payment/components/payment.module.scss";
import TTCoin from "@/common/components/Icons/TTCoin";

interface SquareHeaderProps {

}

const SquareHeader: FunctionComponent<SquareHeaderProps> = () => {
	return <div className={'flex justify-between'}>
		<span className={styles['payment__aside-information__square-header-title']}>
			<span className={'mr-1'}>20</span>
			<TTCoin />
		</span>
		<span className={styles['payment__aside-information__square-header-text']}>20 €</span>
	</div>
}

export default SquareHeader
