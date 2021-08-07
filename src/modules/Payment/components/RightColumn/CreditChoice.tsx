import {FunctionComponent} from "react";
import TTCoin from "@/common/components/Icons/TTCoin";
import styles from "@/modules/Payment/components/RightColumn/credits.module.scss"
import ThumbUp from "@/common/components/Icons/ThumbUp";

interface CreditChoiceProps {
    creditNumber: number;
    active: boolean;
    onClick: Function;
    bestChoice: boolean;
}

const CreditChoice: FunctionComponent<CreditChoiceProps> = ({ onClick, creditNumber = 20, active = false, bestChoice }) => {
	return <div
		onClick={() => onClick()}
		className={`${styles['credit-choice']} ${active ? styles['credit-choice--active'] : ''} ${bestChoice ? styles['credit-choice--best-choice'] : ''}`}
	>
		<div className={'flex items-center'}>
			<span className="text-xl sm:text-3xl font-bold mr-1">{ creditNumber }</span>
			<span className="text-sm sm:text-md"><TTCoin/></span>
		</div>
		<div className={styles['credit-choice__little']}>
			<span className={styles['credit-choice__little-price']}>{ creditNumber }<span className={'text-xs'}>€</span></span>
		    <p className={styles['credit-choice__little-text']}>Pour démarrer en douceur</p>
			{ bestChoice && <div className={styles['credit-choice--best-choice__text']}>
				<ThumbUp />
				<span>Le plus populaire</span>
			</div> }
		</div>
	</div>
}

export default CreditChoice
