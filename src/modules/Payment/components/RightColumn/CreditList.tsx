import {FunctionComponent} from "react";
import CreditChoice from "@/modules/Payment/components/RightColumn/CreditChoice";
import styles from "@/modules/Payment/components/RightColumn/credits.module.scss"

interface CreditListProps {
    creditsChosen: number;
    onCreditChange: (credit: number) => void
}

const CreditList: FunctionComponent<CreditListProps> = ({ creditsChosen = 20, onCreditChange }) => {
	const credits = [5, 10, 20, 30, 50, 75, 100, 200, 500]

	return <div className={styles['credit-list']}>
		{ credits.map((credit: number) => <CreditChoice
			active={creditsChosen === credit}
			key={credit}
			creditNumber={credit}
			onClick={() => onCreditChange(credit)}
		/>)  }
	</div>
}

export default CreditList
