import {FunctionComponent} from "react";
import styles from "@/modules/Payment/components/payment.module.scss";
import TTCoin from "@/common/components/Icons/TTCoin";

interface SquareHeaderProps {
	creditsChosen: number
}

const SquareHeader: FunctionComponent<SquareHeaderProps> = ({ creditsChosen }) => {
	return <div className={'flex justify-between'}>
		<span className={styles['payment__aside-information__square-header-title']}>
			<span className={'mr-1'}>{ creditsChosen }</span>
			<TTCoin />
		</span>
		<span className={styles['payment__aside-information__square-header-text']}>{ creditsChosen } €</span>
	</div>
}

export default SquareHeader
