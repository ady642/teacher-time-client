import {FunctionComponent} from "react";
import TTCoin from "@/common/components/Icons/TTCoin";
import styles from "@/modules/Payment/components/RightColumn/credits.module.scss"

interface CreditChoiceProps {
    creditNumber: number;
    active: boolean;
    onClick: Function;
}

const CreditChoice: FunctionComponent<CreditChoiceProps> = ({ onClick, creditNumber = 20, active = false }) => {
	return <div
		onClick={() => onClick()}
		className={`${styles['credit-choice']}`}
	>
		<div className={'flex items-center'}>
			<span className="text-xl sm:text-3xl font-bold mr-1">{ creditNumber }</span>
			<span className="text-sm sm:text-md"><TTCoin/></span>
		</div>
		<div className={styles['credit-choice__little']}>
			<span className={styles['credit-choice__little-price']}>{ creditNumber }<span className={'text-xs'}>€</span></span>
		    <p className={styles['credit-choice__little-text']}>Pour démarrer en douceur</p>
		</div>
	</div>
}

export default CreditChoice
