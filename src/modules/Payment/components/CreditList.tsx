import {FunctionComponent} from "react";
import CreditChoice from "@/modules/Payment/components/CreditChoice";

interface CreditListProps {
    creditsChosen: number
    onCreditChange: (credit: number) => void
}

const CreditList: FunctionComponent<CreditListProps> = ({ creditsChosen = 20, onCreditChange }) => {
    const credits = [10, 20, 30, 50, 75, 100, 200, 500]

    return <div className={'flex flex-wrap mt-2 justify-center'}>
        { credits.map((credit: number) => <CreditChoice
            active={creditsChosen === credit}
            key={credit}
            creditNumber={credit}
            onClick={() => onCreditChange(credit)}
        />)  }
    </div>
}

export default CreditList
